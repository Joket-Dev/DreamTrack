import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanMapPage } from './plan-map';

@NgModule({
  declarations: [
    PlanMapPage,
  ],
  imports: [
    IonicPageModule.forChild(PlanMapPage),
  ],
})
export class PlanMapPageModule {}
