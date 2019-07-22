import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Hospital from './hospital';
import { Observable } from 'rxjs';


@Injectable({ 
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http: HttpClient ) { }

  getHospital(skip: number, limit: number): Observable<any>{
    let filter = {
      skip: skip,
      limit: limit
    }
    return this.http.get(`api/hospital/list?filter=${JSON.stringify(filter)}`);
  }

  addHospitalData(hospitaldata: Hospital){
    return this.http.post('api/hospital/add', hospitaldata);
  }

  countHospital(): Observable<any> {
    return this.http.get('api/hospital/count');
  }

}
