import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutTripPage } from './about-trip';

@NgModule({
  declarations: [
    AboutTripPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutTripPage),
  ],
})
export class AboutTripPageModule {}
