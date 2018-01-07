import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.css']
})
export class ProfessionalDetailsComponent implements OnInit {
  @Input() model : any;

  constructor() { }

  ngOnInit() {
  }

}
