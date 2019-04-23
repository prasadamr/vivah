import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { MatchingProfileComponent } from './matching-profile/matching-profile.component';

const routes: Routes = [
  { path: 'add-profile', component: AddProfileComponent},
  { path: 'view-profile', component: ViewProfileComponent},
  { path: 'matching-profile/:id', component: MatchingProfileComponent},

   //otherwise
   {path:'**', redirectTo:'add-profile'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddProfileRoutingModule { }
