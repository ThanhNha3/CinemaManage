import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ApiService } from '../common';
import { API_BASE_URL, API_ENDPOINT } from '../../config/api-endpoint.config';

@Injectable({
  providedIn: 'root',
})
export class ShowtimeService extends ApiService {
  constructor(private _http: HttpClient) {
    super(_http);
  }

  getAll(): Observable<any> {
    return this._http.get(API_BASE_URL + API_ENDPOINT.showtime);
  }

  getById(id: string | number): Observable<any> {
    return this._http.get(API_BASE_URL + API_ENDPOINT.showtime + '/' + id);
  }
}
