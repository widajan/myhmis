import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { HospitalComponent } from './hospital/hospital.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { HospitalAddComponent } from './hospital-add/hospital-add.component';
import { PatientComponent } from './patient/patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'doctor',
    component: DoctorComponent, 
    canActivate: [AuthGuard],
    children: [
      {
        path: 'list',
        component: DoctorListComponent,
      },
      {
        path: "add",
        component: DoctorAddComponent
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'department',
    component: DepartmentComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'list',
        component: DepartmentListComponent, 
      },
      {
        path: 'add',
        component: DepartmentAddComponent
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch:'full'
      }
    ]
  },
  {
    path: 'hospital',
    component: HospitalComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'list',
        component: HospitalListComponent,
      },
      {
        path: 'add',
        component: HospitalAddComponent
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'patient',
    component: PatientComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'list',
        component: PatientListComponent
      },
      {
        path: 'add',
        component: PatientAddComponent,
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]
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
