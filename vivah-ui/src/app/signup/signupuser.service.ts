import {Injectable} from "@angular/core";
import {SignUpUser} from './signupuser';
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';



@Injectable()

export class SignUpUserService {

constructor(private _http: Http){

}


 addSignUpUser(newSignUpUser:SignUpUser):any{

 return this._http.get("http://127.0.0.1/vivaah/index.php?action=addSignUpUser");

 }

}
