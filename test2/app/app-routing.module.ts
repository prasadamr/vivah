import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { AboutUsComponent } from "./about-us.component";
import { ContactUsComponent } from "./contact-us.component";
import { ShowEmployeesComponent } from "./employee/show-employees.component";

const routes: Routes = [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home',  component: HomeComponent },
      { path: 'aboutus',  component: AboutUsComponent },
      { path: 'contactus',  component: ContactUsComponent },
      { path: 'viewemployees',  component: ShowEmployeesComponent },

      // otherwise redirect to home
      { path: '**', redirectTo: '' }
    ];

@NgModule({
      imports: [ RouterModule.forRoot(routes) ],
      exports: [ RouterModule ]
    })

export class AppRoutingModule {}
