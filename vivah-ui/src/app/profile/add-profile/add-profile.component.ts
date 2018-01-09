import { Component, OnInit } from '@angular/core';
import { PersonalDetails } from '../models/personal-details';
import { PartnerPreference } from '../models/partner-preference';
import { FamilyDetails } from '../models/family-details';
import { ProfessionalDetails } from '../models/professional-details';
import {AddProfileService} from './add-profile.service';

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
      Name: null,
      IdGender: null,
      DOB: null,
      IdMaritalStatus: null,
      Height: null,
      IdEatingHabbits: null,
      IdReligion: null,
      IdCaste:null,
      IdSubCaste:null,
      IdGothra:null,
      IdNakshatra:null,
      IdRashi:null,
      IdMothertongue:null,
      IdDrinkingHabit: null,
      IdSmokingHabit:null,
      MobileNumber: null,
      PhysicalDisabilities: null,
      UserId: null
    };
    this.familyDetails = {
      Address: null,
      FatherName: null,
      FatherOccupation: null,
      IdFamilyType: null,
      IdPersonalDetails: null,
      MarriedBrothers: null,
      MarriedSisters: null,
      MotherName: null,
      MotherOccupation: null,
      PhoneNumber: null,
      TotalBrothers: null,
      TotalSisters: null
    };
    this.partnerPreference = {
      IdCaste: null,
      IdEatingHabit: null,
      IdEmployement: null,
      IdGender: null,
      IdGothra: null,
      IdMaritalStatus: null,
      IdMotherTongue: null,
      IdNakshatra: null,
      IdPersonalDetails: null,
      IdQualification: null,
      IdRashi: null,
      IdReligion: null,
      IdSmokingHabit: null,
      IdSubCaste: null,
      MaxAge: null,
      MaxHeight: null,
      MinAge: null,
      MinHieght: null,
      IdDrinkingHabit: null
    };
    this.professionalDetails = {
      IdEmployement: null,
      IdPersonalDetails: null,
      IdQualification: null,
      MothtlyIncome: null,
      Occupation: null,
      OfficeAddress: null,
      WorkLocation: null 
    };
  }

  ngOnInit() {
  }

  save() {
    this.service.addPersonalDetails(this.personalDetails).subscribe(
      (res: any) => {
        this.professionalDetails.IdPersonalDetails = res;
        this.familyDetails.IdPersonalDetails = res;
        this.partnerPreference.IdPersonalDetails = res;
        this.addProfessionalDetails();
      },
      (error: Error) => {
        alert("Add Personal Details Failed");
      }
    );
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
