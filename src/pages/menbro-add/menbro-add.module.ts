import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenbroAddPage } from './menbro-add';

@NgModule({
  declarations: [
    MenbroAddPage,
  ],
  imports: [
    IonicPageModule.forChild(MenbroAddPage),
  ],
})
export class MenbroAddPageModule {}
