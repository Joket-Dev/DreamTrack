import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BusinessProfilePage} from '../business-profile/business-profile';
import {AboutTripPage} from '../about-trip/about-trip';
import {FilterPage} from '../filter/filter';
/**
 * Generated class for the AttractionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attraction',
  templateUrl: 'attraction.html',
})
export class AttractionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttractionPage');
  }
  goToAbout(){
    this.navCtrl.push(AboutTripPage);
  }
  goToBusinessProfile(){
    this.navCtrl.push(BusinessProfilePage);
  }
  goToFilter(){
    this.navCtrl.push(FilterPage);
  }
  goToPreviousPage(){
    this.navCtrl.pop();
  }
}
