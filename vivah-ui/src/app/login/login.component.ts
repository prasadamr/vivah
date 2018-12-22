import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {LoginService} from './login.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel: Login;
  isError: boolean;

  constructor(private router: Router, private service: LoginService) {
    this.loginModel = {
      emailId: '',
      password: ''
    };
    this.isError = false;
  }

  ngOnInit() {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  onLoginClick(){
    this.service.onLogin(this.loginModel).subscribe(
      (res: any) => {
        if (res && res.length > 0 && res[0].userId) {
          sessionStorage.setItem('userId', res[0].userId)
          this.router.navigate(['./layout']);
        } else {
          this.isError = true;
        }
      },
      (error: Error) => {
        alert("Login Failed");
      }
    );
    
  }

}
