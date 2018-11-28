import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChamadasPage } from './chamadas';

@NgModule({
  declarations: [
    ChamadasPage,
  ],
  imports: [
    IonicPageModule.forChild(ChamadasPage),
  ],
})
export class ChamadasPageModule {}
