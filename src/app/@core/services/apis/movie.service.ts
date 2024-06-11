import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ApiService } from '../common';
import { API_ENDPOINT } from '../../config/api-endpoint.config';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService extends ApiService {
  constructor(private _http: HttpClient) {
    super(_http);
  }

  getAll(): Observable<any> {
    return this._http.get(environment.apiBaseUrl + API_ENDPOINT.movie);
  }

  getById(id: number): Observable<any> {
    return this._http.get(
      environment.apiBaseUrl + API_ENDPOINT.movie + '/' + id
    );
  }

  create(data: any): Observable<any> {
    return this._http.post(environment.apiBaseUrl + API_ENDPOINT.movie, data);
  }

  remove(id: number) {
    return this._http.delete(
      environment.apiBaseUrl + API_ENDPOINT.movie + '/' + id
    );
  }

  edit(id: number, data: any): Observable<any> {
    return this._http.put(
      environment.apiBaseUrl + API_ENDPOINT.movie + '/' + id,
      data
    );
  }
}
