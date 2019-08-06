import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginAddComponent } from './login-add/login-add.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [{
    path: "add",
    component: LoginAddComponent
  },
  {
    path: "register",
    component:LoginRegisterComponent
  }
]
@NgModule({
  declarations: [
    LoginAddComponent,
    LoginRegisterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],providers: []
})
export class LoginModule { }
