import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AddProfileRoutingModule } from './profile-routing.module';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ReligionDetailsComponent } from './religion-details/religion-details.component';
import { FamilyDetailsComponent } from './family-details/family-details.component';
import { ProfessionalDetailsComponent } from './professional-details/professional-details.component';
import { PartnerPreferencesComponent } from './partner-preferences/partner-preferences.component';

import { PersonalDetailsService } from './personal-details/personal-details.service';
import { FamilyDetailsService } from './family-details/family-details.service';
import { ReligionDetailsService } from './religion-details/religion-details.service';
import { ProfessionalDetailsService } from './professional-details/professional-details.service';
import { PartnerPreferencesService } from './partner-preferences/partner-preferences.service';


import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    AddProfileRoutingModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,

    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule
  ],
  declarations: [
  AddProfileComponent,
  PersonalDetailsComponent,
  ReligionDetailsComponent,
  PartnerPreferencesComponent,
  ProfessionalDetailsComponent,
  FamilyDetailsComponent
  ],
  providers: [PersonalDetailsService,
              FamilyDetailsService,
              ReligionDetailsService,
              ProfessionalDetailsService,
              PartnerPreferencesService],
})
export class ProfileModule { }
