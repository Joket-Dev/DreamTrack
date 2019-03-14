import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import{PlusDialogPage} from '../plus-dialog/plus-dialog';
import {PaymentDetailsPage} from '../payment-details/payment-details';
import {HomePage} from '../home/home';

/**
 * Generated class for the BusinessPlusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-business-plus',
  templateUrl: 'business-plus.html',
})
export class BusinessPlusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessPlusPage');
  }
  buttonClicked(){
    let modal = this.modalCtrl.create(PlusDialogPage);
    modal.onDidDismiss(type=>{
      this.navCtrl.push(PaymentDetailsPage);
      
    });
    modal.present();
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
