import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Login from './login';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor( private http: HttpClient) { }

  addRegister(loginData: Login) {
    return this.http.post('api/login/register', loginData);  
  }

}
