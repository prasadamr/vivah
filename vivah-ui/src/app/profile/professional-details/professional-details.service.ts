import {Injectable} from "@angular/core";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable()

export class ProfessionalDetailsService {

    constructor(private _http: Http){

    }


    getQualificationType():any{
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.get(environment.API_ROOT_PATH + "getQualification", {headers: headers})
                    .map((reponse: Response) => reponse.json());
    }


   getEmploymentType():any{
       var headers = new Headers();
       headers.append('Content-Type', 'application/x-www-form-urlencoded');

       return this._http.get(environment.API_ROOT_PATH + "getEmployment", {headers: headers})
                   .map((reponse: Response) => reponse.json());
   }


}
