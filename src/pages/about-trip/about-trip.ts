import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ConfirmTripPage} from '../confirm-trip/confirm-trip';
/**
 * Generated class for the AboutTripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about-trip',
  templateUrl: 'about-trip.html',
})
export class AboutTripPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutTripPage');
  }
  goToConfirm(){
    this.navCtrl.push(ConfirmTripPage);
  }
  goToPreviousPage(){
    this.navCtrl.pop();
  }
}
