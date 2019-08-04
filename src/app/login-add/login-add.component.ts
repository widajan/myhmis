import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import Login from '../login';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-login-add',
  templateUrl: './login-add.component.html',
  styleUrls: ['./login-add.component.scss']
})
export class LoginAddComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ls: LoginService
  ) { this.loginAdd(); }

  loginAdd(){
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  submitLogin(){
    let newLogin: Login = {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value
    }

    this.ls.addLogin(newLogin)
    .subscribe((data: any) => {
      if (data && data.accessToken) {
        localStorage.setItem("token", data.accessToken);
      }
    }, error => {
      console.log(error, "Error Logging in");
    })
  }



  ngOnInit() {
  }
  
}
