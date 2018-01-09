import { Component, OnInit, Input } from '@angular/core';
import { ProfileDetails } from '../profile-details';
import{ PartnerPreferencesService } from './partner-preferences.service';

@Component({
  selector: 'app-partner-preferences',
  templateUrl: './partner-preferences.component.html',
  styleUrls: ['./partner-preferences.component.css']
})
export class PartnerPreferencesComponent implements OnInit {
  @Input() model : ProfileDetails;

  genders:any[];

  maritalStatus:any[];

  eatingHabbits:any[];

  drinkinghabitType:any[];

  smokingHabit:any[];

  motherTongue:any[];

  religion:any[];

  caste:any[];

  subcaste:any[];

  gotraType:any[];

  nakshatra:any[];

  rashi:any[];

  qualificationType:any[];

  employmentType:any[];

  constructor(private service:PartnerPreferencesService) {

      this.genders = [];
      this.getGenders();

      this.maritalStatus = [];
      this.getMaritalStatus();

      this.eatingHabbits = [];
      this.getEatingHabbits();

      this.drinkinghabitType = [];
      this.getDrinkinghabitType();

      this.smokingHabit = [];
      this.getSmokingHabit();

      this.motherTongue = [];
      this.getMotherTongue();

      this.religion = [];
      this.getReligion();

      this.caste = [];
      this.getCasteType();

      this.subcaste = [];
      this.getSubcaste();

      this.gotraType = [];
      this.getGotraType();

      this.nakshatra = [];
      this.getNakshatraTypes();

      this.rashi = [];
      this.getRashi();

      this.qualificationType = [];
      this.getQualificationType();

      this.employmentType = [];
      this.getEmploymentType();

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
        (response)=> {
          this.maritalStatus = response;
        },
        (error) => {
          alert("Get Marital Status failed");
        }
      );
    }

    getEatingHabbits(){
      this.service.getEatingHabbits().subscribe(
        (response)=> {
          this.eatingHabbits = response;
        },
        (error) => {
          alert("Get Eating Habit Status failed");
        }
      );
    }

    getDrinkinghabitType(){
      this.service.getDrinkinghabitType().subscribe(
        (response)=> {
          this.drinkinghabitType = response;
        },
        (error) => {
          alert("Get Drinking Habit Status failed");
        }
      );
    }

    getSmokingHabit(){
      this.service.getSmokingHabit().subscribe(
        (response)=> {
          this.smokingHabit = response;
        },
        (error) => {
          alert("Get Smoking Habit Status failed");
        }
      );
    }

     getMotherTongue(){
       this.service.getMotherTongue().subscribe(
         (response)=> {
           this.motherTongue = response;
         },
         (error) => {
           alert("Get MotherTongue failed");
         }
       );
     }


     getReligion(){
       this.service.getReligion().subscribe(
         (response)=> {
           this.religion = response;
         },
         (error) => {
           alert("Get Religion failed");
         }
       );
     }


     getCasteType(){
       this.service.getCasteType().subscribe(
         (response)=> {
           this.caste = response;
         },
         (error) => {
           alert("Get Caste failed");
         }
       );
     }


      getSubcaste(){
        this.service.getSubcaste().subscribe(
          (response)=> {
            this.subcaste = response;
          },
          (error) => {
            alert("Get Sub Caste failed");
          }
        );
      }


      getGotraType(){
        this.service.getGotraType().subscribe(
          (response)=> {
            this.gotraType = response;
          },
          (error) => {
            alert("Get Gotra type failed");
          }
        );
      }


      getNakshatraTypes(){
        this.service.getNakshatraTypes().subscribe(
          (response)=> {
            this.nakshatra = response;
          },
          (error) => {
            alert("Get Nakshatra type failed");
          }
        );
      }

      getRashi(){
        this.service.getRashi().subscribe(
          (response)=> {
            this.rashi = response;
          },
          (error) => {
            alert("Get Rashi type failed");
          }
        );
      }

      getQualificationType(){
        this.service.getQualificationType().subscribe(
          (response)=> {
            this.qualificationType = response;
          },
          (error) => {
            alert("Get Qualification type failed");
          }
        );
      }

      getEmploymentType(){
        this.service.getEmploymentType().subscribe(
          (response)=> {
            this.employmentType = response;
          },
          (error) => {
            alert("Get Employment Type type failed");
          }
        );
      }

}
