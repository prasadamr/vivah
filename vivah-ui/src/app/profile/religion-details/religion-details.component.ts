import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  ReligionDetailsService
} from './religion-details.service';
import {
  PersonalDetails
} from '../models/personal-details';

@Component({
  selector: 'app-religion-details',
  templateUrl: './religion-details.component.html',
  styleUrls: ['./religion-details.component.css']
})
export class ReligionDetailsComponent implements OnInit {
  @Input() model: any;

  religion: any[];

  caste: any[];

  subcaste: any[];

  nakshatra: any[];

  rashi: any[];

  gotraType: any[];

  motherTongue: any[];

  constructor(private service: ReligionDetailsService) {

    this.religion = [];
    this.getReligionType();

    this.caste = [];
    this.subcaste = [];    

    this.nakshatra = [];
    this.getNakshatraTypes();

    this.rashi = [];

    this.gotraType = [];
    this.getGotraType();

    this.motherTongue = [];
    this.getMotherTongue();

  }

  ngOnInit() {
    if (this.model.IdReligion) {
      this.getCasteType(this.model.IdReligion);
    }
    if (this.model.IdCaste) {
      this.getSubCasteType(this.model.IdCaste);
    }
    if (this.model.IdNakshatra) {
      this.getRashiName(this.model.IdNakshatra);
    }
  }

  getReligionType() {
    this.service.getReligionType().subscribe(
      (response) => {
        this.religion = response;
      },
      (error) => {
        alert("Get Religion failed");
      }
    );
  }


  onChangeReligion(): void {
    //alert(this.model.IdReligion);
    this.getCasteType(this.model.IdReligion);
  }

  getCasteType(idReligion: number) {
    this.service.getCasteType(idReligion).subscribe(
      (response) => {
        this.caste = response;
      },
      (error) => {
        alert("Get Caste failed");
      }
    );
  }


  onChangeCaste(): void {
    //alert(this.model.IdReligion);
    this.getSubCasteType(this.model.IdCaste);
  }


  getSubCasteType(idCaste: number) {
    this.service.getSubCasteType(idCaste).subscribe(
      (response) => {
        this.subcaste = response;
      },
      (error) => {
        alert("Get Sub Caste failed");
      }
    );
  }


  getNakshatraTypes() {
    this.service.getNakshatraTypes().subscribe(
      (response) => {
        this.nakshatra = response;
      },
      (error) => {
        alert("Get Nakshatra types failed");
      }
    );
  }

  onChangeNakshatra(): void {
    //alert(this.model.IdReligion);
    this.getRashiName(this.model.IdNakshatra);
  }



  getRashiName(idNakshatra: number) {
    this.service.getRashiName(idNakshatra).subscribe(
      (response) => {
        this.rashi = response;
      },
      (error) => {
        alert("Get rashi types failed");
      }
    );
  }


  getGotraType() {
    this.service.getGotraType().subscribe(
      (response) => {
        this.gotraType = response;
      },
      (error) => {
        alert("Get Gotra Types failed");
      }
    );
  }

  getMotherTongue() {
    this.service.getMotherTongue().subscribe(
      (response) => {
        this.motherTongue = response;
      },
      (error) => {
        alert("Get Mother Tongue Types failed");
      }
    );
  }


}
