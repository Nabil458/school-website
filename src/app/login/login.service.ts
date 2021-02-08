import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, ReplaySubject  } from 'rxjs';
import{User} from './user.model';
import { Router } from '@angular/router';


interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered: boolean;
}
@Injectable({ providedIn: 'root' })

export class LoginService {
 constructor(private http: HttpClient, private rout:Router) {}
 user = new ReplaySubject <User>();
 tokenExpirationTimer:any;
 private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }
  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    }=JSON.parse(localStorage.getItem('userData')||'{}');

    if (!userData) {
      return;
    }


    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    },expirationDuration);
    console.log(expirationDuration);
  }

  logout(){
    this.user.next(undefined);
    this.rout.navigate(['']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;

  }
  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAgLOch-v0WIbxjdCSvZ0ZrBeDYB2RKtKc ',
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
            case 'EMAIL_NOT_FOUND' :
              errorUpdate = 'cet email nexiste pas'; break;
            case 'INVALID_PASSWORD' :
               errorUpdate = 'le mot de passe inroduit est inccorect'; break;
          }
          return throwError(errorUpdate);
        }),tap(resData => {
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

