import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, catchError, from, of, switchMap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

import { IAlertMessage } from '../../../@theme/components/alert/ngx-alerts.component';
import { ApiService, LocalStorageService } from '../common';
import { ILogin } from '../../interfaces/login.interface';
import { API_BASE_URL, API_ENDPOINT } from '../../config/api-endpoint.config';
import { UserInfoModel } from '../../model/user-info.model';
import { LOCALSTORAGE_KEY } from '../../config';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends ApiService {
  private loginInfo: ILogin;
  private alertMessages: IAlertMessage;
  private jwtHelperService = new JwtHelperService();

  constructor(
    private _http: HttpClient,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
    super(_http);
  }

  login(form: ILogin): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this._http.post<any>(
      API_BASE_URL + API_ENDPOINT.auth.login,
      {
        email: form.email.trim(),
        password: form.password,
      },
      { headers }
    );
  }

  // requirePassword(form: ILogin): Observable<any> {
  //   return this.post(API_BASE_URL + API_ENDPOINT.auth.login, {
  //     idLogin: this.getIdLogin(),
  //     password: form.password,
  //     newPassword: form.newPassword,
  //     confirmPassword: form.confirmPassword,
  //   });
  // }

  // changePassword(form: ILogin): Observable<any> {
  //   return this.post(API_BASE_URL + API_ENDPOINT.auth.changePassword, {
  //     oldPassword: form.password,
  //     newPassword: form.newPassword,
  //     confirmNewPassword: form.confirmPassword,
  //     token: this.getToken(),
  //   });
  // }

  // forgotPassword(form: ILogin): Observable<any> {
  //   return this.post(API_BASE_URL + API_ENDPOINT.auth.forgotPassword, {
  //     idLogin: form.idLogin,
  //   });
  // }

  // confirmPassword(form: ILogin): Observable<any> {
  //   return this.post(API_BASE_URL + API_ENDPOINT.auth.confirmPassword, {
  //     idLogin: this.getIdLogin(),
  //     newPassword: form.newPassword,
  //     verificationCode: form.verificationCode,
  //   });
  // }

  // updateProfile(form: UserInfoModel): Observable<any> {
  //   return this.patch(API_BASE_URL + API_ENDPOINT.auth.updateProfile, {
  //     firstName: form.firstName,
  //     lastName: form.lastName,
  //     token: this.getToken(),
  //   });
  // }

  // getIdLogin() {
  //   if (this.loginInfo) {
  //     return this.loginInfo.idLogin;
  //   }
  //   return null;
  // }

  // cacheLoginInfo(value: ILogin) {
  //   return (this.loginInfo = value);
  // }

  // cacheUpdateMessage(alertMessages: any) {
  //   return (this.alertMessages = alertMessages);
  // }

  // clearMessage() {
  //   return (this.alertMessages = null);
  // }

  // getUpdateMessage() {
  //   if (this.alertMessages) {
  //     return this.alertMessages;
  //   }
  //   return null;
  // }

  logout() {
    // return this.post<any>(
    //   API_BASE_URL + API_ENDPOINT.auth.logout,
    //   this.getAccessToken()
    // );
    this.localStorageService.clear();
    this.router.navigate(['auth/login']);
  }

  isLoggedIn(): boolean {
    if (this.getAccessToken()) {
      const expired = this.jwtHelperService.isTokenExpired(
        this.getAccessToken()
      );
      if (expired) {
        this.localStorageService.removeItem(LOCALSTORAGE_KEY.accessToken);
      }
      return !expired;
    }
    return false;
  }

  override getAccessToken() {
    return this.localStorageService.getItem<any>(LOCALSTORAGE_KEY.accessToken);
  }

  isExpiredAccessToken(): Observable<boolean> {
    const token = this.getAccessToken();
    if (token) {
      const isExpired = this.jwtHelperService.isTokenExpired(token);
      return isExpired instanceof Promise ? from(isExpired) : of(isExpired);
    }
    return of(true);
  }

  isExpiredRefreshToken(): Observable<boolean> {
    const token = this.getRefreshToken();
    if (token) {
      const isExpired = this.jwtHelperService.isTokenExpired(token);
      return isExpired instanceof Promise ? from(isExpired) : of(isExpired);
    }
    return of(true);
  }

  setAccessToken(token: string): void {
    this.localStorageService.setItem(LOCALSTORAGE_KEY.accessToken, token);
  }

  getRefreshToken() {
    return this.localStorageService.getItem<any>(LOCALSTORAGE_KEY.refreshToken);
  }

  refreshToken(): Observable<any> {
    const refreshToken = this.getRefreshToken();
    return this._http
      .post<any>(API_BASE_URL + API_ENDPOINT.auth.refreshToken, {
        refreshToken,
      })
      .pipe(
        switchMap((res) => {
          this.localStorageService.setItem(
            LOCALSTORAGE_KEY.accessToken,
            res.accessToken
          );
          return of(res.accessToken);
        }),
        catchError(() => {
          this.logout();
          return of(null);
        })
      );
  }
}
