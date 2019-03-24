import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from './api.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService) { }

  private jwtHelper = new JwtHelperService();

  login(username, password) {
    let obs = this.apiService.post('/auth', {
      username,
      password
    });

    obs.subscribe(res => {
      localStorage.setItem("id_token", res.access_token)
    });

    return obs;
  }

  logout() {
    localStorage.setItem("id_token", null)
  }

  isLoggedIn() {
    let token = localStorage.getItem("id_token");
    if (!!token) {
      let expirationDate = this.jwtHelper.getTokenExpirationDate(token);
      
      // expired token
      if (moment(expirationDate).diff(moment.now()) <=0 ) {
        return false;
      } else {
        return true;
      }
    }

    return !!localStorage.getItem("id_token");
  }
}
