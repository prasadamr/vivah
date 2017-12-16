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

  maritalstatus:any[];

  eatingHabbitType:any[];

  drinkinghabitType:any[];

  smokingHabit:any[];

  constructor(private service: PersonalDetailsService) {
    this.genders = [ ];
     this.getGenders();

     this.maritalstatus = [ ];
     this.getMaritalStatus();

     this.eatingHabbitType = [];
     this.getEatingHabit();

     this.drinkinghabitType = [];
     this.getDrinkingType();

     this.smokingHabit = [];
     this.getSmoking();
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

getMaritalStatus(){
  this.service.getMaritalStatus().subscribe(
    (response)=>{
      this.maritalstatus = response;
    },
    (error)=>{
      alert("Get Marital status failed");
    }
  );
}


getEatingHabit(){
  this.service.getEatingHabit().subscribe(
    (response)=>{
      this.eatingHabbitType = response;
    },
    (error)=>{
      alert("Get Eating status failed");
    }
  );
}



getDrinkingType(){
  this.service.getDrinkingType().subscribe(
    (response)=>{
      this.drinkinghabitType = response;
    },
    (error)=>{
      alert("Get Drinking status failed");
    }
  );
}


  getSmoking(){
    this.service.getSmoking().subscribe(
      (response)=>{
        this.smokingHabit = response;
      },
      (error)=>{
        alert("Get Smoking status failed");
      }
    );
  }

}
