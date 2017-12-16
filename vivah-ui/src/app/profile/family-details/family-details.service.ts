import {Injectable} from "@angular/core";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable()

export class FamilyDetailsService {

    constructor(private _http: Http){

    }


    getFamilyType(): any{
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.get(environment.API_ROOT_PATH + "getFamily", {headers: headers})
                    .map((reponse: Response) => reponse.json());
    }



}
