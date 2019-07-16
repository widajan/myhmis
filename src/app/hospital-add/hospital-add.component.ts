import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HospitalService } from '../hospital.service';
import { Router } from '@angular/router';
import Hospital from '../hospital';

@Component({
  selector: 'app-hospital-add',
  templateUrl: './hospital-add.component.html',
  styleUrls: ['./hospital-add.component.scss']
})
export class HospitalAddComponent implements OnInit {

  hospitalForm : FormGroup;

  constructor(
    private hs: HospitalService, 
    private fb: FormBuilder, 
    private router: Router) {
      this.addHospital();
     }

  ngOnInit() {
  } 

  addHospital() {
    this.hospitalForm = this.fb.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      province: ['', Validators.required],
      district: ['', Validators.required]
    });
  }

  submitHospital(){
    let newHospital: Hospital = {
      name: this.hospitalForm.controls.name.value,
      country: this.hospitalForm.controls.country.value,
      province: this.hospitalForm.controls.province.value,
      district: this.hospitalForm.controls.district.value
    }

    this.hs.addHospitalData(newHospital)
    .subscribe(result => {
      this.router.navigate(['/hospital/list']);
    }, error => {
      console.log(error, "Department Error");
    })

  }

  

}
