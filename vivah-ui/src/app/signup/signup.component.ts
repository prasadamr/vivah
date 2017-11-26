import { Component, OnInit } from '@angular/core';
import {SignUpUser} from './signupuser';
import { SignUpUserService } from './signupuser.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  newSignUpUser : SignUpUser = {UserName: '', UserEmail: '', UserPhone: '', UserPwd: '', UserDob: '', UserGender: ''};

  constructor(private _signUpUserService: SignUpUserService)
  {

  }


  onAddSignUp(): void{

    if(this.newSignUpUser.UserName !="" && this.newSignUpUser.UserEmail !="" &&
    this.newSignUpUser.UserPhone != "" && this.newSignUpUser.UserPwd !="" && this.newSignUpUser.UserDob != ""  && this.newSignUpUser.UserGender != ""){

         this._signUpUserService.addSignUpUser(this.newSignUpUser)
                .subscribe(
                  data => alert(data.msg),
                  error => alert(error),
                  () => console.log('')
                );

          //Clear the Fields of the Newly Added Employee
          this.clearFields();
    }
    else
      alert('Please Enter All the Fields');

  }

  clearFields(): void{

    this.newSignUpUser = {UserName: '', UserEmail: '', UserPhone: '', UserPwd: '', UserDob: '', UserGender: ''};
  }

}
