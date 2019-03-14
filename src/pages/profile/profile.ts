import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {PeoplePage} from '../people/people';
import {PrivacyPage} from '../privacy/privacy';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu:MenuController) {
    this.menu.enable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  goToPeople(){
    this.navCtrl.push(PeoplePage);
  }
  goToPrivacy(){
    this.navCtrl.push(PrivacyPage);
  }
}
