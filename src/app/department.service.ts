import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Department from './department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  getDepartment(): Observable<any> {
    return this.http.get('api/department/list');
  }

  addDepartmentData(departmentData: Department){
   return this.http.post("api/department/add",departmentData)
  }
}
