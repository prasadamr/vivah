import {Injectable} from "@angular/core";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable()

export class PartnerPreferencesService {

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



    getEatingHabbits():any{
      var headers = new Headers();

      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      return this._http.get(environment.API_ROOT_PATH + "getEatingHabit", {headers: headers})
                  .map((reponse: Response) => reponse.json());

    }


    getDrinkinghabitType():any{
      var headers = new Headers();

      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      return this._http.get(environment.API_ROOT_PATH + "getDrinkingHabit", {headers: headers})
                  .map((reponse: Response) => reponse.json());

    }


    getSmokingHabit():any{
      var headers = new Headers();

      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      return this._http.get(environment.API_ROOT_PATH + "getSmokingHabit", {headers: headers})
                  .map((reponse: Response) => reponse.json());

    }


    getMotherTongue():any{
      var headers = new Headers();

      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      return this._http.get(environment.API_ROOT_PATH + "getMotherTongueType", {headers: headers})
                  .map((reponse: Response) => reponse.json());

    }


    getReligion():any{
      var headers = new Headers();

      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      return this._http.get(environment.API_ROOT_PATH + "getReligion", {headers: headers})
                  .map((reponse: Response) => reponse.json());

    }


        getCasteType(idReligion: number):any{
            var headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            return this._http.get(environment.API_ROOT_PATH + "getCaste&idReligion="+idReligion, {headers: headers})
                        .map((reponse: Response) => reponse.json());
        }




          getSubcaste(idCaste:number):any{
            var headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            return this._http.get(environment.API_ROOT_PATH + "getSubCaste&idCaste="+idCaste, {headers: headers})
                        .map((reponse: Response) => reponse.json());
        }


              getGotraType():any{
                var headers = new Headers();
                headers.append('Content-Type', 'application/x-www-form-urlencoded');

                return this._http.get(environment.API_ROOT_PATH + "getGotra", {headers: headers})
                            .map((reponse: Response) => reponse.json());
              }


        getNakshatraTypes():any{
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.get(environment.API_ROOT_PATH + "getNakshatra", {headers: headers})
                    .map((reponse: Response) => reponse.json());
       }

       getRashi(idNakshatra:number):any{
       var headers = new Headers();
       headers.append('Content-Type', 'application/x-www-form-urlencoded');

       return this._http.get(environment.API_ROOT_PATH + "getRashi&idNakshatra="+idNakshatra, {headers: headers})
                   .map((reponse: Response) => reponse.json());
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
