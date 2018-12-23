import {Injectable} from "@angular/core";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable()

export class ViewProfileService {

    constructor(private _http: Http){

    }


    getProfiles(): any{
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.get(environment.API_ROOT_PATH + "getProfiles", {headers: headers})
                    .map((reponse: Response) => reponse.json());
    }

    deleteProfile(id) {
        var params = "idPersonalDetails="+id;

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(environment.API_ROOT_PATH + "deleteUser", params, {headers: headers})
                    .map((reponse: Response) => reponse.json());
    }
}
