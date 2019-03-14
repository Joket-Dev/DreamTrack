import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the TimeDialogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-time-dialog',
  templateUrl: 'time-dialog.html',
})
export class TimeDialogPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimeDialogPage');
  }
  close(){
    this.viewCtrl.dismiss("close");
  }
  confirm(){
    this.viewCtrl.dismiss("confirm");
  }
}
