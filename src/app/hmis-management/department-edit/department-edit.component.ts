import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/department.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DepartmentDetails } from '../department/departmentDetails';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.scss']
})
export class DepartmentEditComponent implements OnInit {

  department; 

  formEdit: FormGroup;

  departmentName: FormControl;
  departmentDes: FormControl;

  constructor(private deptS: DepartmentService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) { }


    departmentUpdate(data, id) {
      // console.log("Here is a console log");
      this.formEdit = this.fb.group({
        departmentName: ['', Validators.required]
      });
      this.updateDepartment(id, data);
    }

    updateDepartment(id, data: DepartmentDetails){
     
      this.deptS.update(id, data).subscribe(result => {
        this.router.navigate(['/department/list']);
      }, err => {

      });
    }

  async ngOnInit() {
    this.route.params.subscribe(async params => { 
      await this.getDepartmentDetails(params.id).then(dep => {
        this.department = dep;
      }).catch(err => {

      }); 
      // console.log(this.department, "Dep");
      this.formEdit = this.fb.group({
        departmentName: new FormControl(this.department.departmentName),
        departmentDesc: new FormControl(this.department.departmentDesc)
      });
    });
  }

  async getDepartmentDetails(id): Promise<any>{
    return new Promise((resolve, reject) => {
      this.deptS.getDepartmentById(id)
        .subscribe(result => {
          resolve(result);
        }, error => {
          reject(error);
        });
    });
  }

}
