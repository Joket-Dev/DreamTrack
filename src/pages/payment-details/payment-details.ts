import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaymentDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-details',
  templateUrl: 'payment-details.html',
})
export class PaymentDetailsPage {
  type:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.type="credit";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentDetailsPage');
  }
  segmentChanged($event){
  }

}
