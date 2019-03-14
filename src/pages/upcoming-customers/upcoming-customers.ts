import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UpcomingCustomersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upcoming-customers',
  templateUrl: 'upcoming-customers.html',
})
export class UpcomingCustomersPage {
  period:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.period="day";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingCustomersPage');
  }

  segmentChanged($event) {

  }
  monthChange(val: any) {
    console.log('Month Change:', val);
}
}
