import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LayoutComponent } from './layout/layout.component';

const routes:Routes = [

   { path: 'login', component: LoginComponent},
   { path: 'layout', component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'profiles', loadChildren: 'app/profile/profile.module#ProfileModule' }
    ]  
   },
   { path: 'signUp', component: SignupComponent},

   //otherwise
   {path:'**', redirectTo:'login'}

];

@NgModule({
      imports: [ RouterModule.forRoot(routes) ],
      exports: [ RouterModule ]
    })
export class AppRoutingModule {}
