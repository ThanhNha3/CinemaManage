import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ApiService } from '../common';
import { API_BASE_URL, API_ENDPOINT } from '../../config/api-endpoint.config';

@Injectable({
  providedIn: 'root',
})
export class RoomService extends ApiService {
  constructor(private _http: HttpClient) {
    super(_http);
  }

  getAll(): Observable<any> {
    return this._http.get(API_BASE_URL + API_ENDPOINT.room);
  }

  getById(id: string | number): Observable<any> {
    return this._http.get(API_BASE_URL + API_ENDPOINT.room + '/' + id);
  }

  create(data: any): Observable<any> {
    return this._http.post(API_BASE_URL + API_ENDPOINT.room, data);
  }

  update(id: string | number, data: any): Observable<any> {
    return this._http.put(API_BASE_URL + API_ENDPOINT.room + '/' + id, data);
  }

  remove(id: string | number): Observable<any> {
    return this._http.delete(API_BASE_URL + API_ENDPOINT.room + '/' + id);
  }
}
