import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
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
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';



import {enableProdMode} from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InformationBodyComponent } from './information-body/information-body.component';

import {HttpModule} from '@angular/http';
import { HomeComponent } from './home/home.component';
import { NewcaseComponent } from './header/newcase/newcase.component';
import { AddnewclientComponent } from './header/addnewclient/addnewclient.component';
import { ClientprofComponent } from './header/clientprof/clientprof.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeDetailComponent } from './header/employee-detail/employee-detail.component';
import { ContactUsComponent } from './header/contact-us/contact-us.component';
import { MarkMyAttendanceComponent } from './information-body/mark-my-attendance/mark-my-attendance.component';
import { CasesViewComponent } from './information-body/cases-view/cases-view.component';
import { ClientsViewComponent } from './information-body/clients-view/clients-view.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { ViewCaseComponent } from './information-body/view-case/view-case.component';
import { ClientInfoBarComponent } from './header/client-info-bar/client-info-bar.component';
import { ViewClientComponent } from './information-body/view-client/view-client.component';
import { AnnouncementInfoComponent } from './information-body/announcement-info/announcement-info.component';
import { AddAnnouncementComponent } from './information-body/add-announcement/add-announcement.component';
import { AddNewCaseSelectionBarComponent } from './information-body/add-new-case-selection-bar/add-new-case-selection-bar.component';
import { BusinessImmigrationInfoComponent } from './information-body/business-immigration-info/business-immigration-info.component';
import { FamilyImmigrationInfoComponent } from './information-body/family-immigration-info/family-immigration-info.component';
import { WorkingVisaInfoComponent } from './information-body/working-visa-info/working-visa-info.component';
import { CitizenshipInfoComponent } from './information-body/citizenship-info/citizenship-info.component';
import { NationalInterestWaiverInfoComponent } from './information-body/national-interest-waiver-info/national-interest-waiver-info.component';
import { OtherImmigrationLawServicesInfoComponent } from './information-body/other-immigration-law-services-info/other-immigration-law-services-info.component';


const appRoutes: Routes = [

  { path: 'home', component: InformationBodyComponent },
  { path: 'cases-view', component: CasesViewComponent },
  { path: 'clients-view', component: ClientsViewComponent },
  { path: 'newcase', component: NewcaseComponent },
  { path: 'addnewclient', component: AddnewclientComponent },
  { path: 'clientprof', component: ClientprofComponent },
  { path: 'empdetail', component: EmployeeDetailComponent },
  { path: 'markmyattendance', component: MarkMyAttendanceComponent },
  { path: 'view-case', component: ViewCaseComponent },
  { path: 'view-client', component: ViewClientComponent },
  { path: 'announcement-info', component: AnnouncementInfoComponent },
  { path: 'add-announcement', component: AddAnnouncementComponent },
  { path: 'add-new-case-selection-bar', component: AddNewCaseSelectionBarComponent },
  { path: 'businessImmigration-info', component: BusinessImmigrationInfoComponent },
  { path: 'familyImmigration-info', component: FamilyImmigrationInfoComponent },
  { path: 'workingVisa-info', component: WorkingVisaInfoComponent },
  { path: 'citizenship-info', component: CitizenshipInfoComponent },
  { path: 'nationalInterestWaiver', component: NationalInterestWaiverInfoComponent  },
  { path: 'otherImmigrationLawServices', component: OtherImmigrationLawServicesInfoComponent  }
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InformationBodyComponent,
    HomeComponent,
    NewcaseComponent,
    AddnewclientComponent,
    ClientprofComponent,
    EmployeeDetailComponent,
    ContactUsComponent,
    MarkMyAttendanceComponent,
    CasesViewComponent,
    ClientsViewComponent,
    FirstPageComponent,
    ViewCaseComponent,
    ClientInfoBarComponent,
    ViewClientComponent,
    AnnouncementInfoComponent,
    AddAnnouncementComponent,
    AddNewCaseSelectionBarComponent,
    BusinessImmigrationInfoComponent,
    FamilyImmigrationInfoComponent,
    WorkingVisaInfoComponent,
    CitizenshipInfoComponent,
    NationalInterestWaiverInfoComponent,
    OtherImmigrationLawServicesInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatNativeDateModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],

  exports: [
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
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
    MatTreeModule,
  ]
})

export class AppModule { }
