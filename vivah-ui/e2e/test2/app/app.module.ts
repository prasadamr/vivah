import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';
import { HttpModule } from "@angular/http";

//Components Registered
import { AppComponent }   from './app.component';
import { HeaderComponent } from "./header.component";
import { FooterComponent } from "./footer.component";

import { HomeComponent } from "./home.component";
import { LeftNavigationComponent } from "./left-navigation.component";

import { AboutUsComponent } from "./about-us.component";
import { ContactUsComponent } from "./contact-us.component";
import { ShowEmployeesComponent } from "./employee/show-employees.component";

//Services

import {EmployeeService} from "./employee/employee.service";

@NgModule({
  imports:      [
                  BrowserModule,
                  FormsModule,
                  HttpModule,
                  AppRoutingModule
                ],

  declarations: [
                  AppComponent,
                  HeaderComponent,
                  FooterComponent,
                  HomeComponent,
                  LeftNavigationComponent,
                  AboutUsComponent,
                  ContactUsComponent,
                  ShowEmployeesComponent
                ],

  providers: [
                   EmployeeService
            ],

  bootstrap: [ AppComponent ]
})

export class AppModule {

}
