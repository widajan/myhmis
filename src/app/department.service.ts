import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Department from './department';
import { reject } from 'q';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  getDepartment(limit: number, skip: number): Observable<any> {
    return this.http.get(`api/department/list?limit=${limit}&skip=${skip}`);
  }

  addDepartmentData(departmentData: Department){
   return this.http.post("api/department/add",departmentData)
  }

  countDepartment(): Observable<any>{
    return this.http.get('api/department/total'); 
  }

}
