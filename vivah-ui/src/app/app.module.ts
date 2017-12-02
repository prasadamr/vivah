import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from "@angular/http";

//services
import { SignUpUserService } from "./signup/signupuser.service";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftNavigationComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  AppRoutingModule,
  HttpModule
],
  providers: [SignUpUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
