import { Component, OnInit } from '@angular/core';
import {ViewProfileService} from './view-profile.service'
import { DomSanitizer } from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  profiles: any[];
  blankImage = "../../../images/blank-profile-picture.png";

  constructor(private service:ViewProfileService, public _sanitizer: DomSanitizer, private router: Router) {
    this.profiles = [];
    this.getProfiles();
  }

  ngOnInit() {
  }

  getProfiles(){
    this.service.getProfiles().subscribe(
      (response)=> {
        this.profiles = response;
      },
      (error) => {
        alert("Get Profiles failed");
      }
    );
  }

  goToMatchings(profile) {
    debugger;
    this.router.navigate(['/layout/profiles/matching-profile', profile.IdPersonalDetails])
  }

  deleteProfile(id) {
    this.service.deleteProfile(id).subscribe(
      (response)=> {
        this.getProfiles();
      },
      (error) => {
        alert("Delete Profiles failed");
      }
    );
  }

}
