import {Injectable} from "@angular/core";
import {Employee} from "./employee";
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

//import {EMPLOYEELIST} from "./mock-employees";

@Injectable()

export class EmployeeService {

constructor(private _http: Http){

}

 getEmployee():any{

    
   
   return this._http.get("http://127.0.0.1/testapi/index.php?action=getEmployees").map((rep:Response) => rep.json());
   //return EMPLOYEELIST
 }
 
 

}
