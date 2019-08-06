import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { take } from 'rxjs/operators';
import { Statement } from '@angular/compiler';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor( 
      private authService: AuthService,
      private router: Router ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (this.authService.isTokenExpired()) {
        // if token is expired
        // then remove token from localStorage
        // redirect to login page
        this.authService.removeToken();
        this.router.navigate(['/login/add'], {queryParams: {returnUrl: state.url}});
        return false;
      }
      return true
    }
}
