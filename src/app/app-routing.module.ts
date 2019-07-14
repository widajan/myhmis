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


const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'hospital',
    component: HospitalComponent
  },
  {
    path: 'doctor',
    component: DoctorComponent, 
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
