import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Segment } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
/**
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {
  @ViewChild(Segment) private segment: Segment;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
    this.travelMode = 1;
    this.days=[];
    this.days.push({"number":1,"string":"1"});
    this.days.push({"number":2,"string":"2"});
    this.days.push({"number":7,"string":"7"});
    this.days.push({"number":30,"string":"30"});
    this.days.push({"number":10000000,"string":"+"});
    this.travelDays = "1";
    this.ages = {upper:50, lower:5};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage');
  }
  
  travelMode:number; // 1:car 2:Plane 3:Train
  days:Array<any>;
  travelDays:string;
  ages:any;
  changeMode(mode:number){
    this.travelMode = mode;
  }
  addNewDaysNumber(number:number){
    
    this.days.push({"number":number,"string":number});
    this.days.sort((a, b) => a.number < b.number ? -1 : a.number > b.number ? 1 : 0);

  }
  validForDaysNumber(number:number){
    if(!Number.isInteger(number)) return false;
    if(number <= 0){
      return false;
    }
    
    this.days.forEach(day => {
      if(day == number) return false;
    });
    return true;
  }
  segmentChanged($event){

    if(this.travelDays == "+"){
      const alert = this.alertCtrl.create({
        title: 'How many days do you want to add?',
        inputs: [
          {
            name: 'newDaysNumber',
            placeholder: 'Number of Days'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Add',
            handler: data => {
              var number = +data.newDaysNumber;
              if(this.validForDaysNumber(number)){
                this.addNewDaysNumber(number);
                this.travelDays = data.newDaysNumber;
                setTimeout(() => {
                  if (this.segment) {
                      // this.segment.ngAfterViewInit();
                      this.segment.ngAfterContentInit();
                  }
                });
              }
              else{
                const alert1 = this.alertCtrl.create({
                  title: 'Wrong Number',
                  subTitle: 'Please input correct number of days',
                  buttons: ['Ok']
                });
                alert1.present();
              }
            }
          }
        ]
      });
      alert.present();
    }
  }
  brightness: number = 20;
  saturation: number = 0;
  warmth: number = 1300;
  structure: any = {lower: 33, upper: 60};
  onChange(ev: any) {
    console.log('Changed', ev);
  }
}
