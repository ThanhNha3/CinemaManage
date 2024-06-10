import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/apis';
import { ROUTER_CONFIG } from '../config';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  // canActivate(): boolean {
  //   if (!this.authService.isLoggedIn()) {
  //     if (this.authService.getRefreshToken() === null) {
  //       this.router.navigate(['auth/login']);
  //     } else {
  //       this.authService.refreshToken().subscribe((newToken) => {
  //         if (!newToken) {
  //           this.router.navigate(['auth/login']);
  //         }

  //       });
  //     }
  //   }
  //   return this.authService.isLoggedIn();
  // }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isLoggedIn()) {
      const refreshToken = this.authService.getRefreshToken();
      if (refreshToken === null) {
        this.router.navigate(['auth/login']);
        return false; // Return false immediately if no refresh token
      } else {
        return this.authService.refreshToken().pipe(
          map((newToken) => {
            if (!newToken) {
              this.router.navigate(['auth/login']);
              return false;
            }
            return true; // Return true if the new token is obtained
          }),
          catchError(() => {
            this.router.navigate(['auth/login']);
            return of(false); // Return false if there's an error during token refresh
          })
        );
      }
    }
    return true; // Return true if already logged in
  }

  canActivateChild(): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate();
  }
}
