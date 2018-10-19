import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenbrosPage } from './menbros';

@NgModule({
  declarations: [
    MenbrosPage,
  ],
  imports: [
    IonicPageModule.forChild(MenbrosPage),
  ],
})
export class MenbrosPageModule {}
