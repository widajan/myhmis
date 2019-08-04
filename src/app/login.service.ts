import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Login from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient) { }

  addLogin(loginData: Login){
    return this.http.post('api/login/add', loginData);
  }

}
