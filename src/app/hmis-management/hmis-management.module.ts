import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HmisComponentComponent } from './hmis-component/hmis-component.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { AuthGuard } from '../auth.guard';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { HospitalComponent } from './hospital/hospital.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { HospitalAddComponent } from './hospital-add/hospital-add.component';
import { PatientComponent } from './patient/patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PaginationComponent } from './shared/pagination.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{
  path: "",
  component: HmisComponentComponent,
  children: [
    
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
      path: '',
      component: HomeComponent
    },
  ]}
]

@NgModule({
  declarations: [
    HmisComponentComponent,
    HeaderComponent,
    SideMenuComponent,
    DepartmentAddComponent,
    HospitalComponent,
    DoctorComponent,
    DepartmentComponent,
    DepartmentListComponent,
    DoctorAddComponent,
    DoctorListComponent,
    HospitalListComponent,
    HospitalAddComponent,
    PatientComponent,
    PatientListComponent,
    PatientAddComponent,
    PaginationComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class HmisManagementModule { }
