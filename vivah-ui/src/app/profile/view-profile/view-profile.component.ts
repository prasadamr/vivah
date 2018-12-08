import { Component, OnInit } from '@angular/core';
import {ViewProfileService} from './view-profile.service'

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  profiles: any[];

  constructor(private service:ViewProfileService) {
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

}
