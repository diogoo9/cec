import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenbroAddPage } from './menbro-add';


import { BrMaskerModule } from 'brmasker-ionic-3';


@NgModule({
  declarations: [
    MenbroAddPage,
  ],
  imports: [
    IonicPageModule.forChild(MenbroAddPage),
    BrMaskerModule
  ],
})
export class MenbroAddPageModule {}
