import {Injectable} from "@angular/core";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable()

export class PersonalDetailsService {

    constructor(private _http: Http){

    }


    getGenders(): any{
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.get(environment.API_ROOT_PATH + "getGender", {headers: headers})
                    .map((reponse: Response) => reponse.json());
    }


    getMaritalStatus(): any{
      var headers = new Headers();

      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      return this._http.get(environment.API_ROOT_PATH + "getMaritalStatus", {headers: headers})
                  .map((reponse: Response) => reponse.json());

    }



    getEatingHabit():any{
      var headers = new Headers();

      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      return this._http.get(environment.API_ROOT_PATH + "getEatingHabit", {headers: headers})
                  .map((reponse: Response) => reponse.json());

    }


    getDrinkingType():any{
      var headers = new Headers();

      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      return this._http.get(environment.API_ROOT_PATH + "getDrinkingHabit", {headers: headers})
                  .map((reponse: Response) => reponse.json());

    }


    getSmoking():any{
      var headers = new Headers();

      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      return this._http.get(environment.API_ROOT_PATH + "getSmokingHabit", {headers: headers})
                  .map((reponse: Response) => reponse.json());

    }

}
