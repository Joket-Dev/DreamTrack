import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessDetailPage } from './business-detail';

@NgModule({
  declarations: [
    BusinessDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BusinessDetailPage),
  ],
})
export class BusinessDetailPageModule {}
