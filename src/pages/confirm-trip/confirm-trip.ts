import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlannedTripPage} from '../planned-trip/planned-trip';
import {DreamTripPage} from '../dream-trip/dream-trip';
/**
 * Generated class for the ConfirmTripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm-trip',
  templateUrl: 'confirm-trip.html',
})
export class ConfirmTripPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmTripPage');
  }
  goToPreviousPage(){
    this.navCtrl.pop();
  }
  scheduleButtonClicked(){
    this.navCtrl.setRoot(PlannedTripPage);
  }
  saveButtonClicked(){
    this.navCtrl.setRoot(DreamTripPage);
  }
}
