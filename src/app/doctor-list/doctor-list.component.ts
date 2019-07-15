import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {
 
  doctors:[];

  constructor( private doctorService: DoctorService ) { 
  }

  ngOnInit() {
    this.getDoctorList();
  }


  getDoctorList() {
    this.doctorService.getDoctors()
      .subscribe(result => {
        this.doctors = result
       
      }, error => {
        console.log('Error: ', error);
      })
  }
}
