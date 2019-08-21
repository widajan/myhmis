import { Injectable } from '@angular/core';
import * as jwt_decode from "jwt-decode";
import { ExpectedConditions } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( ) { }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);
    if(decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if(!token) token = this.getToken();
    if(!token) return true;
    const date = this.getTokenExpirationDate(token);
    
    if(date === undefined) return true;
    return !(date.valueOf() > new Date().valueOf());

    // console.log(date.valueOf(), "askjlfkajsklfjaslkkjfasl");

  }
}
