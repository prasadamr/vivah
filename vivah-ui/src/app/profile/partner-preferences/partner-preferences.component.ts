import { Component, OnInit, Input } from '@angular/core';
import { ProfileDetails } from '../profile-details';

@Component({
  selector: 'app-partner-preferences',
  templateUrl: './partner-preferences.component.html',
  styleUrls: ['./partner-preferences.component.css']
})
export class PartnerPreferencesComponent implements OnInit {
  @Input() model : ProfileDetails;

  constructor() { }

  ngOnInit() {
  }

}
