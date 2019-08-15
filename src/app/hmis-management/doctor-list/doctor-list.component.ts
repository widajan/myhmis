import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../doctor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss', '../shared/css/style.scss']
})
export class DoctorListComponent implements OnInit {
 
  doctors:[];
  recPerPage: number = 2;
  page: number = 1;
  skip: number = 0;
  totalPages: number;
  countDoctors: any;


  constructor( 
    private doctorService: DoctorService,
    private route: ActivatedRoute ) { }

  async ngOnInit() {
    this.countDoctors = await this.countAllDoctors();
    this.getDoctorList(this.skip);
  }

  getDoctorList(offset) {
    try {
        this.skip = offset;
        this.doctorService.getDoctors(this.skip, this.recPerPage)
        .subscribe(result => {
          this.doctors = result;
          console.log(result); 
        }, error => {
          console.log('Error: ', error);
        })
      } catch (error) {
      
    } 
  }

  countAllDoctors(): Promise<any>{
    return new Promise((resolve, reject) => {
      this.doctorService.countDoctors()
      .subscribe(result => {
        resolve(result);
      }, err => {
        reject(err);
      })
    })
  }

}
