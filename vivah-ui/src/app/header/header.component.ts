import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  userName: string;

  constructor(private router: Router) {
    this.userName = JSON.parse(sessionStorage.getItem('user')) && JSON.parse(sessionStorage.getItem('user'))[0].userName
  }

  ngOnInit() {
  }

}
