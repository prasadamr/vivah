import { Component, OnInit } from '@angular/core';
import {SignUpUser} from './signupuser';
import { SignUpUserService } from './signupuser.service';
import { Router } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  newSignUpUser : SignUpUser = {UserName: '', UserEmail: '', UserPhone: '', UserPwd: '', UserDob: '', UserGender: ''};

  Gender = ['Male','Female'];

  constructor(private _signUpUserService: SignUpUserService, private router: Router)
  {

  }


    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);

    passwordFormControl = new FormControl('', [
      Validators.required
    ]);

    matcher = new MyErrorStateMatcher();


  onAddSignUp(): void{

    if(this.newSignUpUser.UserName !="" && this.newSignUpUser.UserEmail !="" &&
    this.newSignUpUser.UserPhone != "" && this.newSignUpUser.UserPwd !="" && this.newSignUpUser.UserDob != ""  && this.newSignUpUser.UserGender != "")
    {
         this._signUpUserService.addSignUpUser(this.newSignUpUser)
                .subscribe(
                  data => alert("Congrats..Your account is created Successfully"),
                  error => alert(error),
                  () => console.log('')
                );

          //Clear the Fields of the Newly Added Employee.....
          this.clearFields();
    }
    else
      alert('Please Enter All the Fields');

  }

  onCancelClick() {
    this.router.navigate(['./login']);
  }

  clearFields(): void{

    this.newSignUpUser = {UserName: '', UserEmail: '', UserPhone: '', UserPwd: '', UserDob: '', UserGender: ''};
  }

}
