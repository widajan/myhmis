import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  patients = [];

  constructor(private ps: PatientService) { 
    this.getPatientList(); 
  }

  getPatientList(){
    this.ps.getPatient() 
    .subscribe(result => {
      this.patients = result;
      // console.log(result);
    }, error => {
      console.log(error, "Data not found");
    })
  }

  ngOnInit() {
  }
  
}
