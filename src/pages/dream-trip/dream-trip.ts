import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
/**
 * Generated class for the DreamTripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dream-trip',
  templateUrl: 'dream-trip.html',
})
export class DreamTripPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DreamTripPage');
  }
  goToPreviousPage(){
    if(this.navCtrl.canGoBack()){
      this.navCtrl.pop();
    }
    else{
      this.navCtrl.setRoot(HomePage);
    }
    
  }
}
