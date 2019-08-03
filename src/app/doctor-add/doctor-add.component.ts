import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DoctorService } from '../doctor.service';
import { Router } from '@angular/router';
import Doctor from '../doctor';

@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html',
  styleUrls: ['./doctor-add.component.scss']
})
export class DoctorAddComponent implements OnInit {

  formData: FormGroup;

  hospitals = [];

  departments = [];

  constructor(
    private fb: FormBuilder, 
    private ds: DoctorService, 
    private router: Router
  ) {
    this.doctorAdd();
   }

   doctorAdd(){
      this.formData = this.fb.group({
      name: ['', Validators.required],
      qualification: ['', Validators.required],
      department: ['', Validators.required],
      gender: ['', Validators.required],
      mobile: ['', Validators.required],
      hospitalName: ['', Validators.required],
      shift: ['', Validators.required]
     });
   }

   submitDoctor(){

    //  console.log(this.formData.value, "Add Doctor Form");
    let newDoctor: Doctor = {
      name: this.formData.controls.name.value,
      qualification: this.formData.controls.qualification.value,
      departmentId: this.formData.controls.department.value,
      gender: this.formData.controls.gender.value,
      mobile: this.formData.controls.mobile.value,
      hospitalId: this.formData.controls.hospitalName.value,
      shift: this.formData.controls.shift.value
    }

    this.ds.doctorAddData(newDoctor)
    .subscribe(result => {
      this.router.navigate(['/doctor/list'])
    }, error => {
      console.log(error, "Error Adding");
    })
   }
   getHostpitalList(){
    this.ds.getHospital()
    .subscribe(result => {
      this.hospitals = result;
    }, error => {
      console.log("error", error);
    })
  }

  getDepartmentList() {
    this.ds.getDepartment()
    .subscribe(result => {
      this.departments = result;
    }, error => {
      console.log(error);
    })
  }
  ngOnInit() {
    this.getHostpitalList();
    this.getDepartmentList();
  }

}
