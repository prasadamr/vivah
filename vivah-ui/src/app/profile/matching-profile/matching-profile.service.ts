import {Injectable} from "@angular/core";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable()

export class MatchingProfileService {

    constructor(private _http: Http){

    }


    getMatchingProfiles(id): any{
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.get(environment.API_ROOT_PATH + "getMatchingProfiles&profileId=" + id, {headers: headers})
                    .map((reponse: Response) => reponse.json());
    }
}
