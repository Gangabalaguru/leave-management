import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {

  private baseUrl = 'http://localhost:8081/manager';

  constructor(private http: HttpClient) {}

  getPending() {
    return this.http.get<any[]>(`${this.baseUrl}/pending`);
  }
getApproved() {
  return this.http.get<any[]>(`${this.baseUrl}/approved`);
}

getRejected() {
  return this.http.get<any[]>(`${this.baseUrl}/rejected`);
}
  approve(id: number) {
    return this.http.put(`${this.baseUrl}/approve/${id}`, {});
  }

  reject(id: number) {
    return this.http.put(`${this.baseUrl}/reject/${id}`, {});
  }
}
``