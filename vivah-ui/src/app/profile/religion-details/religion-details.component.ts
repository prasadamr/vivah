import { Component, OnInit, Input } from '@angular/core';
import { ReligionDetailsService } from './religion-details.service';

@Component({
  selector: 'app-religion-details',
  templateUrl: './religion-details.component.html',
  styleUrls: ['./religion-details.component.css']
})
export class ReligionDetailsComponent implements OnInit {
  @Input() model : any;

  religion:any[];

  caste:any[];

  subcaste:any[];

  nakshatra:any[];

  rashi:any[];

  constructor(private service:ReligionDetailsService) {

 this.religion = [];
 this.getReligionType();

this.caste = [];
this.getCasteType();

this.subcaste = [];
this.getSubCasteType();

this.nakshatra = [];
this.getNakshatraTypes();

this.rashi = [];
this.getRashiName();

  }

  ngOnInit() {
  }

  getReligionType() {
    this.service.getReligionType().subscribe(
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


    getSubCasteType(){
      this.service.getSubCasteType().subscribe(
        (response)=> {
          this.subcaste = response;
        },
        (error) => {
          alert("Get Sub Caste failed");
        }
      );
    }


        getNakshatraTypes(){
          this.service.getNakshatraTypes().subscribe(
            (response)=> {
              this.nakshatra = response;
            },
            (error) => {
              alert("Get Natshatra types failed");
            }
          );
        }


        getRashiName(){
          this.service.getRashiName().subscribe(
            (response)=> {
              this.rashi = response;
            },
            (error) => {
              alert("Get rashi types failed");
            }
          );
        }


}
