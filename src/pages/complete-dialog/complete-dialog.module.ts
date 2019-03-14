import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompleteDialogPage } from './complete-dialog';

@NgModule({
  declarations: [
    CompleteDialogPage,
  ],
  imports: [
    IonicPageModule.forChild(CompleteDialogPage),
  ],
})
export class CompleteDialogPageModule {}
