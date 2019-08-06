import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss', '../shared/css/style.scss']
})
export class PatientListComponent implements OnInit {

  patients = [];
  total = 0;
  offset = 0;
  limit = 3;
  constructor(private ps: PatientService) { 
  }

  getPatientList(skip){
    this.offset = skip;
    this.ps.getPatient(this.offset) 
    .subscribe(result => {
      this.patients = result;
      // console.log(result);
    }, error => {
      console.log(error, "Data not found");
    })
  }

  async getPatientsCount(): Promise<any> {
    return new Promise ((resolve, reject) => {
      this.ps.getPatientsCount().subscribe(total => {
        resolve(total);
      }, error => {
        reject(error);
      })
    });
  }

  async ngOnInit() {
    await this.getPatientsCount().then(result => {
      this.total = result;
    }).catch(err => {
       console.log(err); 
    });
    this.getPatientList(this.offset); 
  }
  
}
