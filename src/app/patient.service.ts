import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Patient from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor( private http: HttpClient) { }

  getPatient(): Observable<any> {
   return this.http.get('api/patient/list');
  }

  addPatient(patientData: Patient){
    return this.http.post('api/patient/add', patientData);
  }

  getHospital(): Observable<any> {
    return this.http.get('api/hospital/list'); 
  }

  getDoctor(): Observable<any>{
    return this.http.get('api/doctor/list');
  }

} 
