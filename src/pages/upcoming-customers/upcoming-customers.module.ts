import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpcomingCustomersPage } from './upcoming-customers';

@NgModule({
  declarations: [
    UpcomingCustomersPage,
  ],
  imports: [
    IonicPageModule.forChild(UpcomingCustomersPage),
  ],
})
export class UpcomingCustomersPageModule {}
