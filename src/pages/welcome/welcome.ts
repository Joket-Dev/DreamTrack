import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {GlobalVars} from '../common/globalVars';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public events:Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  public goToLogin1(){
    GlobalVars.business = false;
    this.events.publish("business");
    this.navCtrl.push(LoginPage);
  }
  public goToLogin2(){
    GlobalVars.business = true;
    this.events.publish("business");
    this.navCtrl.push(LoginPage);
  }
}
