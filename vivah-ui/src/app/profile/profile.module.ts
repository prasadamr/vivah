import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddProfileRoutingModule } from './profile-routing.module';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ReligionDetailsComponent } from './religion-details/religion-details.component';

@NgModule({
  imports: [
    CommonModule,
    AddProfileRoutingModule,
    FormsModule
  ],
  declarations: [AddProfileComponent, PersonalDetailsComponent, ReligionDetailsComponent]
})
export class ProfileModule { }
