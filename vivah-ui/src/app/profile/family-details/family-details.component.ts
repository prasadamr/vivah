import { Component, OnInit, Input } from '@angular/core';
import { ProfileDetails } from '../profile-details';

@Component({
  selector: 'app-family-details',
  templateUrl: './family-details.component.html',
  styleUrls: ['./family-details.component.css']
})
export class FamilyDetailsComponent implements OnInit {
  @Input() model : ProfileDetails;

  constructor() { }

  ngOnInit() {
  }

}
