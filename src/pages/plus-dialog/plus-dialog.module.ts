import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlusDialogPage } from './plus-dialog';

@NgModule({
  declarations: [
    PlusDialogPage,
  ],
  imports: [
    IonicPageModule.forChild(PlusDialogPage),
  ],
})
export class PlusDialogPageModule {}
