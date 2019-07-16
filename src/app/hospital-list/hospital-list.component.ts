import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.scss']
})
export class HospitalListComponent implements OnInit {

  hospitals = [];

  constructor(
    private hs: HospitalService
  ) { }

  ngOnInit() {
    this.getHospitalList();
  }

  getHospitalList(){
    this.hs.getHospital()
    .subscribe(result => {
      this.hospitals = result;
    }, error => {
      console.log(error);
    });
  }
  

}
 