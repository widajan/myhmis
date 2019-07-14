import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { HospitalComponent } from './hospital/hospital.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    DepartmentAddComponent,
    HospitalComponent,
    DoctorComponent,
    DepartmentComponent,
    DepartmentListComponent,
    DoctorAddComponent,
    DoctorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
