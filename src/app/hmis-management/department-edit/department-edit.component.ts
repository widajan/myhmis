import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/department.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepartmentDetails } from '../department/departmentDetails';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.scss']
})
export class DepartmentEditComponent implements OnInit {

  department = []; 

  formEdit: FormGroup;

  constructor(private deptS: DepartmentService,
              private route: ActivatedRoute,
              private router: HttpClient,
              private fb: FormBuilder) { }



    departmentUpdate(id, data) {
      this.formEdit = this.fb.group({
        departmentName: ['', Validators.required]
      });
      this.departmentUpdate(id, data);
    }

    updateDepartment(id, data: DepartmentDetails){
      this.deptS.update(id, data).subscribe(result => {

      }, err => {

      });
    }



  ngOnInit() {
    
  }

}
