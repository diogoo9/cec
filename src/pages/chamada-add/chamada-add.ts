import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenbrosProvider } from '../../providers/menbros/menbros';
import { Menbro } from '../../model/Menbro';

/**
 * Generated class for the ChamadaAddPage page. *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chamada-add',
  templateUrl: 'chamada-add.html',
})
export class ChamadaAddPage {
  menbros: Menbro[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private MenbrosProvider: MenbrosProvider) {
  }
  getM() {
    this.menbros = this.MenbrosProvider.get();
    console.log(this.menbros.length);
  }

  ionViewDidLoad() {
    this.getM();
    console.log('ionViewDidLoad ChamadaAddPage');
  }

}
