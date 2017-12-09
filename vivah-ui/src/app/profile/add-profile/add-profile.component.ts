import { Component, OnInit } from '@angular/core';
import { ProfileDetails } from '../profile-details';

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

  profileDetails: ProfileDetails;

  constructor() {
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
    this.profileDetails = {
      name: null,
      idGender: null,
      dob: null,
      idMaritalStatus: null,
      height: null,
      idEatingHabbits: null,
      idDrinking: null,
      idSmoking: null,
      disability: null,
      idReligion: null,
      idCaste:null,
      idSubCaste:null,
      idGothra:null,
      idNakshatra:null,
      idRashi:null,
      idMothertongue:null,
      idSignUpUser:null
    };
  }

  ngOnInit() {
  }

}
