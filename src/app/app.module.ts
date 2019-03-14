import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {WelcomePageModule} from '../pages/welcome/welcome.module';
import {LoginPageModule} from '../pages/login/login.module';
import { Facebook} from '@ionic-native/facebook';
import {ProfilePageModule} from '../pages/profile/profile.module';
import {PlanTripPageModule} from '../pages/plan-trip/plan-trip.module';
import {PlannedTripPageModule} from '../pages/planned-trip/planned-trip.module';
import {DreamTripPageModule} from '../pages/dream-trip/dream-trip.module';
import{PlanMapPageModule} from '../pages/plan-map/plan-map.module';
import {TipConnectPageModule} from '../pages/tip-connect/tip-connect.module';
import {AttractionPageModule} from '../pages/attraction/attraction.module';
import {AboutTripPageModule} from '../pages/about-trip/about-trip.module';
import {BusinessProfilePageModule} from '../pages/business-profile/business-profile.module';
import { ConfirmTripPageModule } from '../pages/confirm-trip/confirm-trip.module';
import{FilterPageModule} from '../pages/filter/filter.module';
import {RegisterBusinessPageModule} from '../pages/register-business/register-business.module';
import {BusinessDetailPageModule} from '../pages/business-detail/business-detail.module';
import {CompleteDialogPageModule} from '../pages/complete-dialog/complete-dialog.module';
import {UpcomingCustomersPageModule} from '../pages/upcoming-customers/upcoming-customers.module';
import {BusinessPlusPageModule} from '../pages/business-plus/business-plus.module'; 
import{PlusDialogPageModule} from '../pages/plus-dialog/plus-dialog.module';
import {PaymentDetailsPageModule} from '../pages/payment-details/payment-details.module';
import {BusinessProfilesPageModule} from '../pages/business-profiles/business-profiles.module';
import {PeoplePageModule} from '../pages/people/people.module';
import{ PrivacyPageModule} from '../pages/privacy/privacy.module';
import {TimeDialogPageModule} from '../pages/time-dialog/time-dialog.module';
import { Geolocation } from '@ionic-native/geolocation';

import {
 GoogleMaps
} from '@ionic-native/google-maps';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    WelcomePageModule,
    LoginPageModule,
    ProfilePageModule,
    PlanTripPageModule,
    PlannedTripPageModule,
    DreamTripPageModule,
    PlanMapPageModule,
    TipConnectPageModule,
    AttractionPageModule,
    BusinessProfilePageModule,
    AboutTripPageModule,
    ConfirmTripPageModule,
    FilterPageModule,
    RegisterBusinessPageModule,
    BusinessDetailPageModule,
    CompleteDialogPageModule,
    UpcomingCustomersPageModule,
    BusinessPlusPageModule,
    PlusDialogPageModule,
    PaymentDetailsPageModule,
    BusinessProfilesPageModule,
    PeoplePageModule,
    PrivacyPageModule,
    TimeDialogPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    GoogleMaps,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
