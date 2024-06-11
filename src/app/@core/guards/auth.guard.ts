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
        this.router.navigate([ROUTER_CONFIG.auth.login]);
        return false;
      } else {
        return this.authService.refreshToken().pipe(
          map((newToken) => {
            if (!newToken) {
              this.router.navigate([ROUTER_CONFIG.auth.login]);
              return false;
            }
            return true;
          }),
          catchError(() => {
            this.router.navigate([ROUTER_CONFIG.auth.login]);
            return of(false);
          })
        );
      }
    }
    return true;
  }

  canActivateChild(): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate();
  }
}
