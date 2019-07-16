import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { DepartmentService } from '../department.service';
import Department from '../department';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.scss']
})
export class DepartmentAddComponent implements OnInit {

  formData:FormGroup;

  constructor( 
    private fb: FormBuilder, 
    private departmentService: DepartmentService,
    private router: Router  
     ) {
    this.departmentAdd();
  
   }

   departmentAdd() {
    this.formData = this.fb.group({
      departmentName: ['', Validators.required],
      departmentDesc: ['', Validators.required]
    });
   }

   submitDepartment() {
    //  console.log(this.formData.value,' Add department value')
    let newDepartment: Department = {
        departmentName: this.formData.controls.departmentName.value,
        departmentDescription: this.formData.controls.departmentDesc.value
    }

    this.departmentService.addDepartmentData(newDepartment)
      .subscribe(result => {
        this.router.navigate(['/department/list']);
      }, error => {
        console.log(error, "Add department error");
      })
   }

  ngOnInit() {
  }

}
