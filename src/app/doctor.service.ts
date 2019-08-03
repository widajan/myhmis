import { Injectable } from '@angular/core';
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

  getDoctors(skip: number, limit: number):  Observable<any> {
    let query = `skip=${skip}&limit=${limit}`;
    return this.http.get(`api/doctor/list?${query}`);
  }

  doctorAddData(doctorData: Doctor){
    return this.http.post('api/doctor/add', doctorData);
  }

  // for dropdown add
  getHospital(): Observable<any> {
    return this.http.get('api/hospital/list');
  }
  // for dropdown add
  getDepartment(): Observable<any> {
    return this.http.get('api/department/list');
  }

  countDoctors(): Observable<any> {
    return this.http.get("api/doctor/count");
  }

}