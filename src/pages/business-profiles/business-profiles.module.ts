import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessProfilesPage } from './business-profiles';

@NgModule({
  declarations: [
    BusinessProfilesPage,
  ],
  imports: [
    IonicPageModule.forChild(BusinessProfilesPage),
  ],
})
export class BusinessProfilesPageModule {}
