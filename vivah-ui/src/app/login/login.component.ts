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

  constructor(private router: Router, private service:LoginService) {
    this.loginModel = {
      emailId: '',
      password: ''
    };

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

    if(this.loginModel.emailId!="" && this.loginModel.password!="")
    {
        this.service.checkLogin(this.loginModel).subscribe(
          (res: any) => {
              sessionStorage.setItem('user', JSON.stringify(res));
             this.router.navigate(['./layout']);
             alert("login successfully");
          },
            (error: Error) => {
              alert("Email or Password are incorrect.");
            }
          );

      }

}

}
