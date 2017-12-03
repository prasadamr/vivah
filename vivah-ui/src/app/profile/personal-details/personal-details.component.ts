import { Component, OnInit, Input } from '@angular/core';
import { PersonalDetails } from './personal-details';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  @Input() model: PersonalDetails;

  constructor() { }

  ngOnInit() {
  }

}
