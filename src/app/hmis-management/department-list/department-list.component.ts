import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../department.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { skip } from 'rxjs/operators';



@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss', '../shared/css/style.scss']
})
export class DepartmentListComponent implements OnInit {

  departments:[];
  countDepartments:any;
  page:number = 1;
  recPerPage:number = 1;
  totalPage:number;
  skip = 0;
  searchBtnStatus = false;
  
  constructor( 
    private departmentService: DepartmentService,
    private route: ActivatedRoute
    
  ) { }

  async ngOnInit() {

    this.countDepartments = await this.countAllDepartment();
    this.getDepartmentList(this.skip);
    this.route.queryParams.subscribe(params => {
      this.page = params.page;
  })

  }

  getDepartmentList(offset, searchTerm = ''){
    try {
      this.skip = offset;
      this.departmentService.getDepartment(this.recPerPage, this.skip, searchTerm)
      .subscribe(result => {
      this.departments = result;
      }, error =>{
        console.log("error", error);
    })
    } catch (error) {
      
    }  
  }
 
  countAllDepartment(searchTerm=''){
    return new Promise((resolve, reject) => {
      this.departmentService.countDepartment(searchTerm)
      .subscribe(result => {
        resolve(result);
      }, error => {
        reject(error);
      })
    })
  }

  async searchDepartment(event) {
    let searchKey = event.target.value;
    if(searchKey && searchKey.trim().length >= 2) {
      this.countDepartments = await this.countAllDepartment(searchKey);
      // console.log(this.countDepartments);
      this.getDepartmentList(0, searchKey);
    }
  }


}
