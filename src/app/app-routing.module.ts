import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './hmis-management/header/header.component';
import { SideMenuComponent } from './hmis-management/side-menu/side-menu.component';
import { DepartmentAddComponent } from './hmis-management/department-add/department-add.component';
import { HospitalComponent } from './hmis-management/hospital/hospital.component';
import { DoctorComponent } from './hmis-management/doctor/doctor.component';
import { DepartmentComponent } from './hmis-management/department/department.component';
import { DepartmentListComponent } from './hmis-management/department-list/department-list.component';
import { DoctorListComponent } from './hmis-management/doctor-list/doctor-list.component';
import { DoctorAddComponent } from './hmis-management/doctor-add/doctor-add.component';
import { HospitalListComponent } from './hmis-management/hospital-list/hospital-list.component';
import { HospitalAddComponent } from './hmis-management/hospital-add/hospital-add.component';
import { PatientComponent } from './hmis-management/patient/patient.component';
import { PatientListComponent } from './hmis-management/patient-list/patient-list.component';
import { PatientAddComponent } from './hmis-management/patient-add/patient-add.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: ()  => import("./hmis-management/hmis-management.module").then(m => m.HmisManagementModule)
  },
  
  {
    path: 'login',
    loadChildren: ()  => import("./login/login.module").then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
