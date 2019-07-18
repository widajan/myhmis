import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Route, Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  departments:[];
  countDepartments:any;
  page:number = 1;
  recPerPage:number = 1;
  totalPage:number;
  constructor( 
    private departmentService: DepartmentService,
    private route: ActivatedRoute
    
  ) { }

  ngOnInit() {
    this.getDepartmentList();

    this.route.queryParams.subscribe(params => {
      this.page = params.page;
  })

  }

  async getDepartmentList(){
    
    try {
      this.countDepartments = await this.countAllDepartment();
      

      const skip = (this.page*this.recPerPage) - this.recPerPage;
      this.totalPage = Math.ceil(this.countDepartments/this.recPerPage);
      console.log(skip,'skip');
      this.departmentService.getDepartment(this.recPerPage, skip)
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
