import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../hospital.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.scss', '../shared/css/style.scss']
})
export class HospitalListComponent implements OnInit {

  hospitals = [];
  skip: number = 0;
  recPerPage: number = 2;
  page: number = 1;
  totalPages: number;
  countHospitals: number = 0;

  constructor(
    private hs: HospitalService,
    private route: ActivatedRoute
  ) { }
 
  async ngOnInit() {
     await this.countAllHospital().then(result => {
      this.countHospitals = result;
    }).catch(err => {
    });
    this.getHospitalList(this.skip);
    this.route.queryParams.subscribe(params => {
      this.page = params.page;
    });
  }

  getHospitalList(offset){
    try {
      this.skip=offset;
      this.hs.getHospital(this.skip, this.recPerPage)
      .subscribe(result => {
        this.hospitals = result;
      }, error => {
        console.log(error);
      });
    } catch (error) {
      
    }   
  }

  async countAllHospital(): Promise<any>{
    return new Promise((resolve, reject) => {
      this.hs.countHospital()
      .subscribe(result => {
        resolve(result);
      }, error => {
        reject(error);
      });
    })
  }
}
 