import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProfileComponent } from './add-profile/add-profile.component';

const routes: Routes = [
  { path: 'add-profile', component: AddProfileComponent},

   //otherwise
   {path:'**', redirectTo:'add-profile'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddProfileRoutingModule { }
