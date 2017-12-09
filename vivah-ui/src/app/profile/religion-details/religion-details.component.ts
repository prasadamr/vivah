import { Component, OnInit, Input } from '@angular/core';
import { ProfileDetails } from '../profile-details';

@Component({
  selector: 'app-religion-details',
  templateUrl: './religion-details.component.html',
  styleUrls: ['./religion-details.component.css']
})
export class ReligionDetailsComponent implements OnInit {
  @Input() model : ProfileDetails;

  constructor() { }

  ngOnInit() {
  }

}
