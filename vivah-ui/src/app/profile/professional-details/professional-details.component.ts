import { Component, OnInit, Input } from '@angular/core';
import { ProfileDetails } from '../profile-details';

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.css']
})
export class ProfessionalDetailsComponent implements OnInit {
  @Input() model : ProfileDetails;

  constructor() { }

  ngOnInit() {
  }

}
