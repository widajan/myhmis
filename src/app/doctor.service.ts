import { Injectable } from '@angular/core';
// import { Doctor } from './doctor';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Doctor from './doctor';

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

  doctorAddData(doctorData: Doctor){
    return this.http.post('api/doctor/add', doctorData);
  }

  getHospital(): Observable<any> {
    return this.http.get('api/hospital/list');
  }

  getDepartment(): Observable<any> {
    return this.http.get('api/department/list');
  }

}