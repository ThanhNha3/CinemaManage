import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { API_BASE_URL, API_ENDPOINT } from '../../config/api-endpoint.config';
import { ApiService } from '../common';

@Injectable({
  providedIn: 'root',
})
export class ShowtimeService extends ApiService {
  constructor(private _http: HttpClient) {
    super(_http);
  }

  getAll(): Observable<any> {
    return this._http.get(`${API_BASE_URL + API_ENDPOINT.showtime}`);
  }

  getById(id: number): Observable<any> {
    return this._http.get(`${API_BASE_URL + API_ENDPOINT.showtime + '/' + id}`);
  }

  create(data: any): Observable<any> {
    return this._http.post(`${API_BASE_URL + API_ENDPOINT.showtime}`, data);
  }

  edit(id: number | string, data: any): Observable<any> {
    return this._http.put(
      API_BASE_URL + API_ENDPOINT.showtime + '/' + id,
      data
    );
  }

  delete(id: number | string): Observable<any> {
    return this._http.delete(API_BASE_URL + API_ENDPOINT.showtime + '/' + id);
  }
}
