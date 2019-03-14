import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlannedTripPage } from './planned-trip';

@NgModule({
  declarations: [
    PlannedTripPage,
  ],
  imports: [
    IonicPageModule.forChild(PlannedTripPage),
  ],
})
export class PlannedTripPageModule {}
