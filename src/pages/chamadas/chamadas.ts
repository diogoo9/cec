import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChamadaAddPage } from '../chamada-add/chamada-add';
import { MenbrosProvider } from '../../providers/menbros/menbros';

/**
 * Generated class for the ChamadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chamadas',
  templateUrl: 'chamadas.html',
})
export class ChamadasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  chamadaAdd(){
    this.navCtrl.setRoot(ChamadaAddPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ChamadasPage');
  }

}
