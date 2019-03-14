import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {BusinessDetailPage} from '../business-detail/business-detail';
import {CompleteDialogPage} from '../complete-dialog/complete-dialog';
import {HomePage} from '../home/home';
/**
 * Generated class for the RegisterBusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-business',
  templateUrl: 'register-business.html',
})
export class RegisterBusinessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterBusinessPage');
  }
  goToPreviousPage(){
    this.navCtrl.pop();
  }
  goToBusinessDetailPage(){
    this.navCtrl.push(BusinessDetailPage);
  }
  buttonClicked(){
    let modal = this.modalCtrl.create(CompleteDialogPage);
    modal.onDidDismiss(data => {
      this.navCtrl.push(HomePage);
    });
    modal.present();
  }
}
