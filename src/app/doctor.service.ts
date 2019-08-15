import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Doctor from './doctor';
import { DoctorDetails } from './hmis-management/doctor/doctorDetails';

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
    let queryParams = {
      all: true
    }
    return this.http.get(`api/hospital/list?filter=${JSON.stringify(queryParams)}`);
  }
  // for dropdown add
  getDepartment(): Observable<any> {
    let queryParams = {
      all: true
    };
    return this.http.get(`api/department/list?filter=${JSON.stringify(queryParams)}`);
  }

  countDoctors(): Observable<any> {
    return this.http.get("api/doctor/count");
  }

  getDoctorDetails(){
    return this.http.get('api/doctor/getdoctor')
  }

  getDoctorById(id) {
    return this.http.get(`api/doctor/details/${id}`);
  }

  update(id, data): Observable<any>{
    return this.http.put(`api/doctor/update/${id}`, data);
  }

}