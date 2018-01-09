import {Injectable} from "@angular/core";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

import { PersonalDetails } from '../models/personal-details';
import { PartnerPreference } from '../models/partner-preference';
import { FamilyDetails } from '../models/family-details';
import { ProfessionalDetails } from '../models/professional-details';

@Injectable()

export class AddProfileService {

    constructor(private _http: Http){

    }

    addPersonalDetails(personalDetails: PersonalDetails) {
        var params = "DOB="+personalDetails.DOB
            +"&Height="+personalDetails.Height
            +"&IdCaste="+personalDetails.IdCaste
            +"&IdDrinkingHabit="+personalDetails.IdDrinkingHabit
            +"&IdEatingHabbits="+personalDetails.IdEatingHabbits
            +"&IdGender="+personalDetails.IdGender
            +"&IdGothra="+personalDetails.IdGothra
            +"&IdMaritalStatus="+personalDetails.IdMaritalStatus
            +"&IdMothertongue="+personalDetails.IdMothertongue
            +"&IdNakshatra="+personalDetails.IdNakshatra
            +"&IdRashi="+personalDetails.IdRashi
            +"&IdReligion="+personalDetails.IdReligion
            +"&IdSmokingHabit="+personalDetails.IdSmokingHabit
            +"&IdSubCaste="+personalDetails.IdSubCaste
            +"&MobileNumber="+personalDetails.MobileNumber
            +"&Name="+personalDetails.Name
            +"&PhysicalDisabilities="+personalDetails.PhysicalDisabilities
            +"&UserId="+personalDetails.UserId;

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(environment.API_ROOT_PATH + "", params, {headers: headers})
                    .map((reponse: Response) => reponse.json());
    }

    addProfessionalDetails(professionalDetails: ProfessionalDetails) {
        var params = "IdEmployement="+professionalDetails.IdEmployement
            +"&IdPersonalDetails="+professionalDetails.IdPersonalDetails
            +"&IdQualification="+professionalDetails.IdQualification
            +"&MothtlyIncome="+professionalDetails.MothtlyIncome
            +"&Occupation="+professionalDetails.Occupation
            +"&OfficeAddress="+professionalDetails.OfficeAddress
            +"&WorkLocation="+professionalDetails.WorkLocation;

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(environment.API_ROOT_PATH + "", params, {headers: headers})
                    .map((reponse: Response) => reponse.json());
    }

    addFamilyDetails(familyDetails: FamilyDetails) {
        var params = "Address="+familyDetails.Address
            +"&FatherName="+familyDetails.FatherName
            +"&FatherOccupation="+familyDetails.FatherOccupation
            +"&IdFamilyType="+familyDetails.IdFamilyType
            +"&IdPersonalDetails="+familyDetails.IdPersonalDetails
            +"&MarriedBrothers="+familyDetails.MarriedBrothers
            +"&MarriedSisters="+familyDetails.MarriedSisters
            +"&MotherName="+familyDetails.MotherName
            +"&MotherOccupation="+familyDetails.MotherOccupation
            +"&PhoneNumber="+familyDetails.PhoneNumber
            +"&TotalBrothers="+familyDetails.TotalBrothers
            +"&TotalSisters="+familyDetails.TotalSisters;

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(environment.API_ROOT_PATH + "", params, {headers: headers})
                    .map((reponse: Response) => reponse.json());
    }

    addPartnerPreference(partnerPreference: PartnerPreference) {
        var params = "Address="+partnerPreference.IdCaste
            +"&FatherName="+partnerPreference.IdDrinkingHabit
            +"&FatherOccupation="+partnerPreference.IdEatingHabit
            +"&IdFamilyType="+partnerPreference.IdEmployement
            +"&IdPersonalDetails="+partnerPreference.IdGender
            +"&MarriedBrothers="+partnerPreference.IdGothra
            +"&MarriedSisters="+partnerPreference.IdMaritalStatus
            +"&MotherName="+partnerPreference.IdMotherTongue
            +"&MotherOccupation="+partnerPreference.IdNakshatra
            +"&PhoneNumber="+partnerPreference.IdPersonalDetails
            +"&TotalBrothers="+partnerPreference.IdQualification
            +"&TotalSisters="+partnerPreference.IdRashi
            +"&TotalSisters="+partnerPreference.IdReligion
            +"&TotalSisters="+partnerPreference.IdSmokingHabit
            +"&TotalSisters="+partnerPreference.IdSubCaste
            +"&TotalSisters="+partnerPreference.MaxAge
            +"&TotalSisters="+partnerPreference.MaxHeight
            +"&TotalSisters="+partnerPreference.MinAge
            +"&TotalSisters="+partnerPreference.MinHieght;

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(environment.API_ROOT_PATH + "", params, {headers: headers})
                    .map((reponse: Response) => reponse.json());
    }
}
