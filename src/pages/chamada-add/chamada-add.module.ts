import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChamadaAddPage } from './chamada-add';

@NgModule({
  declarations: [
    ChamadaAddPage,
  ],
  imports: [
    IonicPageModule.forChild(ChamadaAddPage),
  ],
})
export class ChamadaAddPageModule {}
