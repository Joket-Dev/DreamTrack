import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PlanTripPage} from '../plan-trip/plan-trip';
import {PlannedTripPage} from '../planned-trip/planned-trip';
import {DreamTripPage} from '../dream-trip/dream-trip';
import {TipConnectPage} from '../tip-connect/tip-connect';
import {GlobalVars} from '../common/globalVars';
import {UpcomingCustomersPage} from '../upcoming-customers/upcoming-customers';
import {BusinessPlusPage} from '../business-plus/business-plus';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  business:boolean;
  constructor(public navCtrl: NavController) {
    this.business = GlobalVars.business;
    //this.business = true;
    //alert(this.business);
  }
  goToPlan(){
    this.navCtrl.push(PlanTripPage);
  }
  goToPlanned(){
    this.navCtrl.push(PlannedTripPage);
  }
  goToDream(){
    this.navCtrl.push(DreamTripPage);
  }
  goToConnect(){
    this.navCtrl.push(TipConnectPage)
  }
  goToUpcomingCustomers(){
    this.navCtrl.push(UpcomingCustomersPage);
  }
  goToPlus(){
    this.navCtrl.push(BusinessPlusPage);
  }
}
