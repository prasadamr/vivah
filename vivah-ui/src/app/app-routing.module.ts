import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';


const routes:Routes = [

   { path: '', component: LoginComponent},
   { path: 'home', component: HomeComponent},
   { path: 'signUp', component: SignupComponent},

   //otherwise
   {path:'**', redirectTo:''}

];

@NgModule({
      imports: [ RouterModule.forRoot(routes) ],
      exports: [ RouterModule ]
    })
export class AppRoutingModule {}
