import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftNavigationComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  AppRoutingModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
