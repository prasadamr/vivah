import { Component, OnInit, Input } from '@angular/core';
import { FamilyDetailsService } from './family-details.service';

@Component({
  selector: 'app-family-details',
  templateUrl: './family-details.component.html',
  styleUrls: ['./family-details.component.css']
})
export class FamilyDetailsComponent implements OnInit {
  @Input() model : any;

familyType:any[];

  constructor(private service:FamilyDetailsService) {

this.familyType = [];
this.getFamilyType();


   }

  ngOnInit() {
  }

  getFamilyType(){
    this.service.getFamilyType().subscribe(
      (response)=> {
        this.familyType = response;
      },
      (error) => {
        alert("Get Family Types failed");
      }
    );
  }



}
