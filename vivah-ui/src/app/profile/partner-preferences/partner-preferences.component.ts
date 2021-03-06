import { Component, OnInit, Input } from '@angular/core';
import{ PartnerPreferencesService } from './partner-preferences.service';

@Component({
  selector: 'app-partner-preferences',
  templateUrl: './partner-preferences.component.html',
  styleUrls: ['./partner-preferences.component.css']
})
export class PartnerPreferencesComponent implements OnInit {
  @Input() model : any;

  genders:any[];

  maritalStatus:any[];

  eatingHabbits:any[];

  drinkinghabitType:any[];

  smokingHabit:any[];

  motherTongue:any[];

  religion:any[];

  caste:any[];

  subcaste:any[];

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

      this.subcaste = [];

//      this.gotraType = [];
  //    this.getGotraType();

    //  this.nakshatra = [];
    //  this.getNakshatraTypes();

    //  this.rashi = [];

      this.qualificationType = [];
      this.getQualificationType();

      this.employmentType = [];
      this.getEmploymentType();

  }

  ngOnInit() {
    if (this.model.IdReligion) {
      this.getCasteType(this.model.IdReligion);
    }
    if (this.model.IdCaste) {
      this.getSubcaste(this.model.IdCaste);
    }

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


     onChangeReligion(idReligion: number):void{
       //alert(this.model.IdReligion);
       this.getCasteType(this.model.IdReligion);
     }


     getCasteType(idReligion: number){
       this.service.getCasteType(idReligion).subscribe(
         (response)=> {
           this.caste = response;
         },
         (error) => {
           alert("Get Caste failed");
         }
       );
     }


 onChangeCaste(idCaste:number):void{
   //alert(this.model.IdCaste);
   this.getSubcaste(this.model.IdCaste);
}


      getSubcaste(idCaste:number){
        this.service.getSubcaste(idCaste).subscribe(
          (response)=> {
            this.subcaste = response;
          },
          (error) => {
            alert("Get Sub Caste failed");
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
