import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';


@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  departments:[];
  countDepartments:any;

  constructor( private departmentService: DepartmentService
    
  ) { }

  ngOnInit() {
    this.getDepartmentList();
  }

  async getDepartmentList(){
    
    try {
      this.countDepartments = await this.countAllDepartment();
      
      this.departmentService.getDepartment()
    .subscribe(result => {
      this.departments = result;
    }, error =>{
      console.log("error", error);
    })
    } catch (error) {
      
    }

    
  }

  countAllDepartment(){
    return new Promise((resolve, reject) => {
      this.departmentService.countDepartment()
      .subscribe(result => {
        resolve(result);
      }, error => {
        reject(error);
      })
    })
  }
}
