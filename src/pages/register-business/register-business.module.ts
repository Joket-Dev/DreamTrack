import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterBusinessPage } from './register-business';

@NgModule({
  declarations: [
    RegisterBusinessPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterBusinessPage),
  ],
})
export class RegisterBusinessPageModule {}
