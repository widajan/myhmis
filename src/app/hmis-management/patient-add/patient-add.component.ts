import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PatientService } from '../../patient.service';
import { Router } from '@angular/router';
import Patient from '../../patient';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.scss']
})
export class PatientAddComponent implements OnInit {

  patientForm: FormGroup;

  hospitals = [];

  doctors = [];

  constructor(
    private ps: PatientService, 
    private fb: FormBuilder, 
    private router: Router) {
      this.patientInsert();
     }

    patientInsert(){
      this.patientForm = this.fb.group ({
        name:               ['', Validators.required],
        age:                ['', Validators.required],
        gender:             ['', Validators.required],
        address:            ['', Validators.required],
        mobile:             ['', Validators.required],
        blood_group:        ['', Validators.required],
        diagnosis:          ['', Validators.required],
        dateOfExamination:  ['', Validators.required],
        hospitalName:       ['', Validators.required],
        doctorName:         ['', Validators.required]
      });
    }
    submitPatient() { 
      let newPatient: Patient = {
        name:               this.patientForm.controls.name.value,
        age:                this.patientForm.controls.age.value,
        gender:             this.patientForm.controls.gender.value,
        address:            this.patientForm.controls.address.value,
        mobile:             this.patientForm.controls.mobile.value,
        bloodGroup:         this.patientForm.controls.blood_group.value,
        diagnosis:          this.patientForm.controls.diagnosis.value,
        dateOfExamination:  this.patientForm.controls.dateOfExamination.value,
        hospitalId:         this.patientForm.controls.hospitalName.value,
        doctorId:           this.patientForm.controls.doctorName.value
      }
      this.ps.addPatient(newPatient)
      .subscribe(result => {
        this.router.navigate(['patient/list']);
      }, error => {
        console.log(error, "Patient data not added");
      })
    }
    
    getHospitalData(){
      this.ps.getHospital()
      .subscribe(result => {
        this.hospitals = result;
      }, error => {
        console.log(error);
      });
    }

    getDoctorsData(){
      this.ps.getDoctor()
      .subscribe(result => {
        this.doctors = result;
      }, error => {
        console.log(error, "Data not found");
      });
    }


  ngOnInit() {
    this.getHospitalData();
    this.getDoctorsData();
  }
  
}
 