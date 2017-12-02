import { Component, OnInit } from '@angular/core';
import { PersonalDetails } from '../personal-details/personal-details';

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
    this.personalDetails = {
      disability: null,
      dob: null,
      drinking: null,
      eatingHabbits: null,
      gender: null,
      height: null,
      maritalStatus: null,
      name: null,
      smoking: null
    };
  }

  ngOnInit() {
  }

}
