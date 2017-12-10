import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRadioModule} from '@angular/material/radio';

import { AddProfileRoutingModule } from './profile-routing.module';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ReligionDetailsComponent } from './religion-details/religion-details.component';
import { FamilyDetailsComponent } from './family-details/family-details.component';
import { ProfessionalDetailsComponent } from './professional-details/professional-details.component';
import { PartnerPreferencesComponent } from './partner-preferences/partner-preferences.component';
import { PersonalDetailsService } from './personal-details/personal-details.service';

@NgModule({
  imports: [
    CommonModule,
    AddProfileRoutingModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatMenuModule,
    MatInputModule,
    MatToolbarModule,
    MatRadioModule
  ],
  declarations: [AddProfileComponent, PersonalDetailsComponent, ReligionDetailsComponent,
  PartnerPreferencesComponent,
  ProfessionalDetailsComponent,
  FamilyDetailsComponent
  ],
  providers: [PersonalDetailsService],
})
export class ProfileModule { }
