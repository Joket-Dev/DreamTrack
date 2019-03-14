import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeDialogPage } from './time-dialog';

@NgModule({
  declarations: [
    TimeDialogPage,
  ],
  imports: [
    IonicPageModule.forChild(TimeDialogPage),
  ],
})
export class TimeDialogPageModule {}
