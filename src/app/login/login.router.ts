import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router,UrlTree} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

import { LoginService } from './login.service';

@Injectable({ providedIn: 'root' })
export class LoginRouter implements CanActivate {
  constructor(private loginguard: LoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
    return this.loginguard.user.pipe(
      take(1),
      map(user => {
        const isAuth = !!user;
        if (isAuth) {
          return true;
        }
        return this.router.createUrlTree(['/login']);
      })
    );
  }
}
