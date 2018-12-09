import { Component, OnInit, HostListener } from '@angular/core';
import { PersonalDetails } from '../models/personal-details';
import { PartnerPreference } from '../models/partner-preference';
import { FamilyDetails } from '../models/family-details';
import { ProfessionalDetails } from '../models/professional-details';
import {AddProfileService} from './add-profile.service';
import * as moment from 'moment';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {
  isPersonalDetails: boolean;
  isReligionDetails: boolean;
  isFamilyDetails: boolean;
  isProfessionalDetails: boolean;
  isPartnerPreferences: boolean;

  personalDetails: PersonalDetails;
  partnerPreference: PartnerPreference;
  familyDetails: FamilyDetails;
  professionalDetails: ProfessionalDetails;


  constructor(private service: AddProfileService) {
    this.closeTabs();
    this.defaultValues();
  }

  closeTabs() {
    this.isFamilyDetails = false;
    this.isPartnerPreferences = false;
    this.isPersonalDetails = false;
    this.isProfessionalDetails = false;
    this.isReligionDetails = false;
  }

  defaultValues() {
    this.personalDetails = {
      Name: 'efds',
      IdGender: 101,
      DOB: 'null',
      Email:'gr@hh.com',
      ProfilePicPath:'',
      IdMaritalStatus: 1001,
      Height: '5.9',
      IdEatingHabbits: 111,
      IdReligion: 1,
      IdCaste:12,
      IdSubCaste:111,
      IdGothra:1,
      IdNakshatra:101,
      IdRashi:101,
      IdMothertongue:101,
      IdDrinkingHabit: 101,
      IdSmokingHabit:1,
      MobileNumber: 998989898,
      PhysicalDisabilities: 'hjjdsf',
      AboutMe:'sjdhfj',
      UserId: 0
    };
    this.familyDetails = {
      Address: 'jsdfh',
      FatherName: 'null',
      FatherOccupation: 'null',
      IdFamilyType: 1,
      IdPersonalDetails: null,
      MarriedBrothers: 1,
      MarriedSisters: 1,
      MotherName: 'null',
      MotherOccupation: 'null',
      PhoneNumber: '999899889',
      TotalBrothers: 1,
      TotalSisters: 1
    };


    this.partnerPreference = {
      IdCaste: 12,
      IdEatingHabit: 111,
      IdEmployement: 101,
      IdGender: 101,
      IdMaritalStatus: 1001,
      IdMotherTongue: 101,
      IdPersonalDetails: null,
      IdQualification: 1,
      IdReligion: 1,
      IdSmokingHabit: 1,
      IdSubCaste: 111,
      MaxAge: 28,
      MaxHeight: 6,
      MinAge: 19,
      MinHieght: 5,
      IdDrinkingHabit: 101,
      MyExpectation: 'null'
    };

    this.professionalDetails = {
      IdEmployement: 101,
      IdPersonalDetails: null,
      IdQualification: 1,
      MothtlyIncome: 50000,
      Occupation: 'null',
      OfficeAddress: 'null',
      WorkLocation: 'null'
    };
  }

  ngOnInit() {
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
    window.scrollTo({top: 250});
  }

  prevStep() {
    this.step--;
    window.scrollTo({top: 250});
  }

  save():void {


    // if(this.personalDetails.Name != "" && this.personalDetails.IdGender != null && this.personalDetails.DOB != null && this.personalDetails.Email != "" &&
    //    this.personalDetails.ProfilePicPath != "" && this.personalDetails.IdMaritalStatus != null && this.personalDetails.Height != "" &&
    //    this.personalDetails.IdEatingHabbits != null && this.personalDetails.IdDrinkingHabit != null && this.personalDetails.IdSmokingHabit != null &&
    //    this.personalDetails.MobileNumber != null && this.personalDetails.PhysicalDisabilities != "" && this.personalDetails.AboutMe != "")
    // {
      this.personalDetails.DOB = moment(this.personalDetails.DOB).format("YYYY-MM-DD");
    this.service.addPersonalDetails(this.personalDetails).subscribe(
      (res: any) => {
        this.professionalDetails.IdPersonalDetails = res.id;
        this.familyDetails.IdPersonalDetails = res.id;
        this.partnerPreference.IdPersonalDetails = res.id;
        this.addProfessionalDetails();
      },
      (error: Error) => {
        alert("Adding Personal Details Failed");
      }
    );
  // }
  // else
  // alert('Please Enter All the Fields');

}

  addProfessionalDetails() {
    this.service.addProfessionalDetails(this.professionalDetails).subscribe(
      (res: any) => {
        this.addFamilyDetails();
      },
      (error: Error) => {
        alert("Add Professional Details Failed");
      }
    );
  }

  addFamilyDetails() {
    this.service.addFamilyDetails(this.familyDetails).subscribe(
      (res: any) => {
        this.addPartnerPreference();
      },
      (error: Error) => {
        alert("Add Family Details Failed");
      }
    );
  }

  addPartnerPreference() {
    this.service.addPartnerPreference(this.partnerPreference).subscribe(
      (res: any) => {
        alert("Add Profile Success");
      },
      (error: Error) => {
        alert("Add Partner Preference Failed");
      }
    );
  }

}
