import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DoctorService } from 'src/app/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorDetails } from '../doctor/doctorDetails';
import { disableDebugTools } from '@angular/platform-browser';


@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.scss']
})
export class DoctorEditComponent implements OnInit {

  hospitals= [];
  departments = [];
  doctor: any;
  editForm: FormGroup;

  name: FormControl;
  qualification: FormControl;
  department: FormControl;
  gender: FormControl;
  mobile: FormControl;
  shift: FormControl;
  hospitalName: FormControl;

  constructor( 
    private http: HttpClient,
    private ds: DoctorService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder ) { }

  doctorUpdate(data, id){
    // console.log(id, "id");
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      qualification: ['', Validators.required],
      department: ['', Validators.required],
      gender: ['', Validators.required],
      mobile: ['', Validators.required],
      hospitalName: ['', Validators.required],
      shift: ['', Validators.required]
    });
    this.updateDoctor(id, data);
  }
  
  updateDoctor(id, data:DoctorDetails) {
       this.ds.update(id, data).subscribe(result => {

       }, err => {
         
       });
       this.router.navigate(['/']);
 }

  async ngOnInit() {
    let selectedDepId = '';
    let selectedHospId = '';
    
    this.route.params.subscribe(async params => {
      await this.getDoctorDetails(params['id']).then(data => {
        this.doctor = data;
      }).catch(err => {});

      await this.getHostpitalList()
      .then(hosp => {
        this.hospitals = hosp;
        this.hospitals.forEach((hospital) => {
          if(this.doctor.hospital == hospital.hospitalName) {
            selectedHospId = hospital._id;
          }
        });

      }).catch(err => {});

      await this.getDepartmentList().then(deps => {
        this.departments = deps;
        this.departments.forEach((department) => {

          if (this.doctor.department == department.departmentName) {
            selectedDepId = department._id;
          }
        });

      }).catch(err => {});
      this.editForm = this.fb.group({
        name: new FormControl(this.doctor.name),
        //  ? this.doctor.gender : '' is used for html selected item
        qualification: new FormControl(this.doctor.qualification),
        department: new FormControl(this.doctor.department ? selectedDepId : ''),
        gender: new FormControl(this.doctor.gender ? this.doctor.gender : ''),
        mobile: new FormControl(this.doctor.mobile),
        hospital: new FormControl(this.doctor.shifts.hospitalName ? selectedDepId : ''),
        shift: new FormControl(this.doctor.shift ? this.doctor.shift : '')
      });
    });
  }

  async getHostpitalList(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.ds.getHospital()
    .subscribe(result => {
      resolve(result);
    }, error => {
      reject(error);
    });
    })
  }

  async getDepartmentList(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.ds.getDepartment()
      .subscribe(result => {
        resolve(result);
      }, error => {
        reject(error);
      });
    });
  }

  async getDoctorDetails(id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.ds.getDoctorById(id)
      .subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

}
