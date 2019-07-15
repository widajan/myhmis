import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  departments:[];

  constructor( private departmentService: DepartmentService
    
  ) { }

  ngOnInit() {
    this.getDepartmentList();
  }

  getDepartmentList(){
    this.departmentService.getDepartment()
    .subscribe(result => {
      this.departments = result;
    }, error =>{
      console.log("error", error);
    })
  }

}
