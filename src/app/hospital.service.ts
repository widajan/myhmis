import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Hospital from './hospital';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http: HttpClient ) { }

  getHospital(): Observable<any>{
    return this.http.get('api/hospital/list');
  }

  addHospitalData(hospitaldata: Hospital){
    return this.http.post('api/hospital/add', hospitaldata);
  }

}
