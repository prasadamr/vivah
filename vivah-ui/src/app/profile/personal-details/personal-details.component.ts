import { Component, OnInit, Input } from '@angular/core';
import {PersonalDetailsService} from './personal-details.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {HttpClient} from '@angular/common/http';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

selectedFile = null;

constructor(private http:HttpClient){}

onFileSelected(event){
  this.selectedFile = event.target.file[0];
}

onUpload(){

}


  @Input() model: any;
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


    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);

    matcher = new MyErrorStateMatcher();


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
