import { Injectable } from '@angular/core';
// import { Doctor } from './doctor';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(
    private http: HttpClient
) { }


  getDoctors():  Observable<any> {
    return this.http.get('/api/doctor/list');
  }
}