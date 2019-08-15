import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
