import { Component, OnInit, Input } from '@angular/core';
<<<<<<< HEAD
import { ProfileDetails } from '../profile-details';
import { ProfessionalDetailsService } from './professional-details.service';
=======
>>>>>>> e00e73ef15a1232508b9dcae62a347e2107e4013

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.css']
})
export class ProfessionalDetailsComponent implements OnInit {
  @Input() model : any;

  qualificationType:any[];

  employmentType:any[];

  constructor(private service:ProfessionalDetailsService) {

this.qualificationType = [];
this.getQualificationType();

this.employmentType = [];
this.getEmploymentType();

   }

  ngOnInit() {
  }

  getQualificationType(){
    this.service.getQualificationType().subscribe(
      (response)=> {
        this.qualificationType = response;
      },
      (error) => {
        alert("Get Qualification Types failed");
      }
    );
  }


  getEmploymentType(){
    this.service.getEmploymentType().subscribe(
      (response)=> {
        this.employmentType = response;
      },
      (error) => {
        alert("Get Employment Types failed");
      }
    );
  }

}
