import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttractionPage } from './attraction';

@NgModule({
  declarations: [
    AttractionPage,
  ],
  imports: [
    IonicPageModule.forChild(AttractionPage),
  ],
})
export class AttractionPageModule {}
