// import { Injectable } from '@angular/core';
// import {
//   HttpInterceptor,
//   HttpHandler,
//   HttpRequest,
//   HttpEvent,
//   HttpErrorResponse,
// } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, switchMap } from 'rxjs/operators';
// import { AuthService } from '../services/apis';
// @Injectable()
// export class JWTInterceptor implements HttpInterceptor {
//   constructor(private authService: AuthService) {}
//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     const accessToken = this.authService.getAccessToken();
//     if (accessToken) {
//       request = request.clone({
//         setHeaders: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });
//     }
//     return next.handle(request).pipe(
//       catchError((error: HttpErrorResponse) => {
//         if (error.status === 401) {
//           return this.authService.refreshToken().pipe(
//             switchMap((newToken: string) => {
//               if (newToken) {
//                 request = request.clone({
//                   setHeaders: {
//                     Authorization: `Bearer ${newToken}`,
//                   },
//                 });
//                 return next.handle(request);
//               }
//               this.authService.logout();
//               return throwError(error);
//             }),
//             catchError((error) => {
//               this.authService.logout();
//               return throwError(error);
//             })
//           );
//         }
//         return throwError(error);
//       })
//     );
//   }
//   // injectToken(request: HttpRequest<any>): HttpRequest<any> {
//   //   return request.clone({
//   //     setHeaders: {},
//   //     body: '',
//   //   });
//   // }
// }

import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { AuthService } from '../services/apis';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.isAuthRequest(request.url)) {
      return next.handle(request);
    }

    return this.authService.isExpiredAccessToken().pipe(
      switchMap((isAccessTokenExpired: boolean) => {
        if (isAccessTokenExpired) {
          return this.authService.isExpiredRefreshToken().pipe(
            switchMap((isRefreshTokenExpired: boolean) => {
              if (!isRefreshTokenExpired) {
                return this.authService.refreshToken().pipe(
                  switchMap((newToken: string) => {
                    if (newToken) {
                      request = request.clone({
                        setHeaders: {
                          Authorization: `Bearer ${newToken}`,
                        },
                      });
                    } else {
                      this.authService.logout();
                      throw new HttpErrorResponse({
                        status: 401,
                        statusText: 'Unauthorized',
                      });
                    }
                    return next.handle(request);
                  })
                );
              } else {
                this.authService.logout();
                throw new HttpErrorResponse({
                  status: 401,
                  statusText: 'Unauthorized',
                });
              }
            })
          );
        } else {
          const accessToken = this.authService.getAccessToken();
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          return next.handle(request);
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.authService.logout();
        }
        return throwError(error);
      })
    );
  }

  private isAuthRequest(url: string): boolean {
    return url.includes('/auth');
  }
}
