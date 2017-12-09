import { Component, OnInit, Input } from '@angular/core';
import { ProfileDetails } from '../profile-details';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  @Input() model: ProfileDetails;

  constructor() { }

  ngOnInit() {
  }

}
