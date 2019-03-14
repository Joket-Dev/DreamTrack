import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the PlusDialogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plus-dialog',
  templateUrl: 'plus-dialog.html',
})
export class PlusDialogPage {
  type:number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
    this.type = 12;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlusDialogPage');
  }
  select(type:number){
    this.type = type;
  }
  cancel(){
    this.viewCtrl.dismiss(0);
  }
  buttonClicked(){
    this.viewCtrl.dismiss(this.type);
  }
}
