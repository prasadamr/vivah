import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel: Login;

  constructor(private router: Router) { 
    this.loginModel = {
      emailId: '',
      password: ''
    };
  }

  ngOnInit() {
  }

  onLoginClick(){
    this.router.navigate(['./layout']);
  }

}
