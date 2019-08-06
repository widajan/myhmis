import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../login.service';
import Login from '../../login';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-login-add',
  templateUrl: './login-add.component.html',
  styleUrls: ['./login-add.component.scss']
})
export class LoginAddComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ls: LoginService,
    private route: ActivatedRoute
  ) { 
    this.loginAdd();
    this.route.queryParams.subscribe(params=>{
      if (params && params.returnUrl){
        this.returnUrl = params.returnUrl;
      }
    })
  }

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
      
      if (this.returnUrl) {
        this.router.navigate([this.returnUrl]);
      } else {
        this.router.navigate(["/"]);
      }
      // For token header generation, create an interceptor.
      // Here we created (http-client.interceptor.ts)
      // after that, go to app.modules and in providers section, load the following
      // provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor,multi: true
    }, error => {
      console.log(error, "Error Logging in");
    })
  }



  ngOnInit() {
  }
  
}
