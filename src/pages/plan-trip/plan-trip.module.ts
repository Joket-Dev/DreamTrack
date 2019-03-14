import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanTripPage } from './plan-trip';

@NgModule({
  declarations: [
    PlanTripPage,
  ],
  imports: [
    IonicPageModule.forChild(PlanTripPage),
  ],
})
export class PlanTripPageModule {}
