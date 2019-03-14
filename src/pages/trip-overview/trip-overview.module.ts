import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TripOverviewPage } from './trip-overview';

@NgModule({
  declarations: [
    TripOverviewPage,
  ],
  imports: [
    IonicPageModule.forChild(TripOverviewPage),
  ],
})
export class TripOverviewPageModule {}
