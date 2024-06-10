import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ApiService } from '../common';
import { API_BASE_URL, API_ENDPOINT } from '../../config/api-endpoint.config';

@Injectable({
  providedIn: 'root',
})
export class ShowtimeService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`${API_BASE_URL + API_ENDPOINT.showtime}`);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${API_BASE_URL + API_ENDPOINT.showtime + '/' + id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${API_BASE_URL + API_ENDPOINT.showtime}`, data);
  }

  edit(id, data: any): Observable<any> {
    return this.http.put(API_BASE_URL + API_ENDPOINT.showtime + '/' + id, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(API_BASE_URL + API_ENDPOINT.showtime + '/' + id);
  }
}
