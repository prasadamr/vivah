import {Injectable} from "@angular/core";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import { Login } from './login';

import { environment } from '../../environments/environment';

@Injectable()

export class LoginService {

    constructor(private _http: Http){

    }

    checkLogin(loginModel:Login) {

         var params = "EmailId="+loginModel.emailId
                    +"&Password="+loginModel.password

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(environment.API_ROOT_PATH + "checkLogin", params, {headers: headers})
                    .map((reponse: Response) => reponse.json());

    }

}
