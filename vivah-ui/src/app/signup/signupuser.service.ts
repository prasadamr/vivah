import {Injectable} from "@angular/core";
import {SignUpUser} from './signupuser';
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

@Injectable()

export class SignUpUserService {

constructor(private _http: Http){

}


addSignUpUser(newSignUpUser:SignUpUser): any{

   var params = "UserName="+newSignUpUser.UserName
              +"&UserEmail="+newSignUpUser.UserEmail
              +"&UserPhone="+newSignUpUser.UserPhone
              +"&UserPwd="+newSignUpUser.UserPwd
              +"&UserDob="+newSignUpUser.UserDob
              +"&UserGender="+newSignUpUser.UserGender;

   var headers = new Headers();
   headers.append('Content-Type', 'application/x-www-form-urlencoded');

   return this._http.post(environment.API_ROOT_PATH + "addSignUpUser", params, {headers: headers})
             .map((reponse: Response) => reponse.json());
   }

}
