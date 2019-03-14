import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DreamTripPage } from './dream-trip';

@NgModule({
  declarations: [
    DreamTripPage,
  ],
  imports: [
    IonicPageModule.forChild(DreamTripPage),
  ],
})
export class DreamTripPageModule {}
