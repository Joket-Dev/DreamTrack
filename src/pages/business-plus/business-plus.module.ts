import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessPlusPage } from './business-plus';

@NgModule({
  declarations: [
    BusinessPlusPage,
  ],
  imports: [
    IonicPageModule.forChild(BusinessPlusPage),
  ],
})
export class BusinessPlusPageModule {}
