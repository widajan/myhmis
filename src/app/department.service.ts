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

  getDepartment(limit: number, skip: number, searchTerm = ''): Observable<any> {
    let filter = {
      limit: limit,
      skip: skip,
      searchTerm: searchTerm
    }; 
    return this.http.get(`api/department/list?filter=${encodeURIComponent(JSON.stringify(filter))}`);
  }

  addDepartmentData(departmentData: Department){
   return this.http.post("api/department/add",departmentData)
  }

  countDepartment(searchTerm = ''): Observable<any>{
    let filter = {
      searchTerm: searchTerm
    };
    return this.http.get(`api/department/total?filter=${encodeURIComponent(JSON.stringify(filter))}`);
  }

  getDepartmentById(id){
    return this.http.get(`api/department/details/${id}`);
  }

  update(id, data): Observable<any> {
    return this.http.put(`api/department/update/${id}`, data);
  }

  delete(id): Observable<any>{
    return this.http.delete(`api/department/delete/${id}`);
  }

}
