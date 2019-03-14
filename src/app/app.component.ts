import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {WelcomePage} from '../pages/welcome/welcome';
import {ProfilePage} from '../pages/profile/profile';
import {PlannedTripPage} from '../pages/planned-trip/planned-trip';
import {PlanTripPage} from '../pages/plan-trip/plan-trip';
import{DreamTripPage} from '../pages/dream-trip/dream-trip';
import {TipConnectPage} from '../pages/tip-connect/tip-connect';
import { UpcomingCustomersPage } from '../pages/upcoming-customers/upcoming-customers';
import {BusinessPlusPage} from '../pages/business-plus/business-plus';
import {BusinessProfilesPage} from '../pages/business-profiles/business-profiles';
import {GlobalVars} from '../pages/common/globalVars';
import {LoginPage} from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any}>;
  business:boolean;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menuController:MenuController, public events:Events) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];
    events.subscribe('business', (data) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      //console.log('Welcome', user, 'at', time);
      this.business = GlobalVars.business;
    });
    this.business = GlobalVars.business;
    //this.business = false;
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  goToProfile(){
    this.nav.setRoot(ProfilePage);
  }
  goToPlanned(){
    this.nav.setRoot(PlannedTripPage);
  }
  goToHome(){
    this.nav.setRoot(HomePage);
  }
  goToExplorer(){
    this.nav.setRoot(PlanTripPage);
  }
  goToDream(){
    this.nav.setRoot(DreamTripPage);
  }
  logout(){
    this.menuController.close();
    this.nav.setRoot(WelcomePage)
  }
  goToUpcomingCustomers(){
    this.nav.setRoot(UpcomingCustomersPage);
  }
  goToBusinessPlus(){
    this.nav.setRoot(BusinessPlusPage);
  }
}
