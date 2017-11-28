import {Injectable} from "@angular/core";
import {SignUpUser} from './signupuser';
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';



@Injectable()

export class SignUpUserService {

constructor(private _http: Http){

}


 addSignUpUser(newSignUpUser:SignUpUser){

 return this._http.post("http://127.0.0.1/vivaah/index.php?action=addSignUpUser",newSignUpUser);

 }

}
