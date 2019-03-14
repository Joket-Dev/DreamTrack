import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ModalController } from 'ionic-angular';
import {HomePage} from '../home/home';
import {RegisterBusinessPage} from '../register-business/register-business';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import {TimeDialogPage} from '../time-dialog/time-dialog';
import {GlobalVars} from '../common/globalVars';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginType:string;
  business:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public facebook:Facebook, public modalCtrl:ModalController) {
    this.loginType = "login";
    this.business = GlobalVars.business;
    this.business = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  segmentChanged($event){
    //alert(JSON.stringify(event));
    if(this.loginType == "login"){
      //alert('login');
    }
    if(this.loginType == "register"){
      //alert("register");
    }
  }
  login(){
    // const alert = this.alertController.create({
    //   title: 'Login',
    //   message:'We have sent OTP in Mail',
    //   inputs: [
    //     {
    //       name: 'OTP',
    //       placeholder: 'Enter OTP'
    //     }
    //   ],
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //       role: 'cancel',
    //       handler: data => {
    //         console.log('Cancel clicked');
    //       }
    //     },
    //     {
    //       text: 'Confirm',
    //       handler: data => {
    //         // if (User.isValid(data.username, data.password)) {
    //         //   // logged in!
    //         // } else {
    //         //   // invalid login
    //         //   return false;
    //         // }
    //         this.navCtrl.setRoot(HomePage);
    //       }
    //     }
    //   ]
    // });
    // alert.present();
    let modal = this.modalCtrl.create(TimeDialogPage);
    modal.onDidDismiss(data=>{
      if(data=="confirm"){
        this.navCtrl.setRoot(HomePage);
      }
    });
    modal.present();
  }
  fbLogin(){
    this.facebook.login(['public_profile', 'email']).then((res:FacebookLoginResponse)=>{
      alert("You logged in to Facebook Successfully");
      this.navCtrl.setRoot(HomePage);
    });
  }
  goToPreviousPage(){
    this.navCtrl.pop();
  }
  RegisterBusiness(){
    this.navCtrl.push(RegisterBusinessPage);
  }
}
