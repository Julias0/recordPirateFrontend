import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  post(relativePath, body) {
    return this.http.post<any>(`${this.baseUrl}${relativePath}`, body, this.httpOptions);
  }

  get(relativePath, params = null) {
    let newHttpHeaders = null;
    if (params) {
      newHttpHeaders = {
        ...this.httpOptions,
        params: new HttpParams({
          ...params
        })
      };
    }
    return this.http.get<any>(`${this.baseUrl}${relativePath}`, newHttpHeaders || this.httpOptions);
  }
}
