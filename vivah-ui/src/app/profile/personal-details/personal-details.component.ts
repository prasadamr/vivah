import { Component, OnInit, Input } from '@angular/core';
import { ProfileDetails } from '../profile-details';
import {PersonalDetailsService} from './personal-details.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  @Input() model: ProfileDetails;
  genders: any[];

  constructor(private service: PersonalDetailsService) { 
    this.genders = [
      {
        id: 1,
        name: 'Male'
      }
    ];
    // this.getGenders();
  }

  ngOnInit() {
  }

  getGenders() {
    this.service.getGenders().subscribe(
      (response)=> {
        this.genders = response;
      },
      (error) => {
        alert("Get Genders failed");
      }
    );
  }

}
