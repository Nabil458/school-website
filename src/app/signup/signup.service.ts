import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, ReplaySubject  } from 'rxjs';
import{User} from './user.model';


interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}
@Injectable({ providedIn: 'root' })

export class SignupService {
  constructor(private http: HttpClient) {}
  user = new ReplaySubject <User>();

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
  }


  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAgLOch-v0WIbxjdCSvZ0ZrBeDYB2RKtKc',
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
       )
       .pipe(
        catchError(errorRes => {
          let errorUpdate = 'une erreur inconnu!';
          if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorUpdate);
          }
          switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
              errorUpdate = 'cet email existe déja';
          }
          return throwError(errorUpdate);
        }, ),tap(resData => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
       );

     
  }
}





