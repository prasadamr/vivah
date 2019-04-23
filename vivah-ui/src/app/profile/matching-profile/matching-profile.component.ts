import { Component, OnInit } from '@angular/core';
import {MatchingProfileService} from './matching-profile.service'
import { DomSanitizer } from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-matching-profile',
  templateUrl: './matching-profile.component.html',
  styleUrls: ['./matching-profile.component.css']
})
export class MatchingProfileComponent implements OnInit {

  profiles: any[];
  blankImage = "../../../images/blank-profile-picture.png";
  paramId: number;

  constructor(private service:MatchingProfileService, public _sanitizer: DomSanitizer, private route: ActivatedRoute) {
    this.profiles = [];
    this.paramId = +this.route.snapshot.params['id'];
    this.getMatchingProfiles();
  }

  ngOnInit() {
  }

  getMatchingProfiles(){
    this.service.getMatchingProfiles(this.paramId).subscribe(
      (response)=> {
        this.profiles = response;
      },
      (error) => {
        alert("Get Profiles failed");
      }
    );
  }

}
