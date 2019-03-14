import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PrivacyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-privacy',
  templateUrl: 'privacy.html',
})
export class PrivacyPage {
  email:string;
  phone:string;
  photo:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.email = "every";
    this.phone= "every";
    this.photo = "every";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivacyPage');
  }
  goToPreviousPage(){
    this.navCtrl.pop();
  }
}
