import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../register.service';
import Register from '../../register';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  RegistrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private rs: RegisterService
  ) { this.registerAddData() }

    registerAddData(){
      this.RegistrationForm = this.fb.group({
        name: ['', Validators.required ],
        email: ['', Validators.required ],
        password: ['', Validators.required ]
      });
    }

    submitRegister(){
      let newRegister:  Register = {
        name: this.RegistrationForm.controls.name.value,
        email: this.RegistrationForm.controls.email.value,
        password: this.RegistrationForm.controls.password.value
      }
      this.rs.addRegister(newRegister)
      .subscribe(result => {
        this.router.navigate(['/login']);
      }, error => {
        console.log(error, "Error Adding");
      })
    }


  ngOnInit() {
  }
  
}
