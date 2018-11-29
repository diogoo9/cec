import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenbrosProvider } from '../../providers/menbros/menbros';
import { Menbro } from '../../model/Menbro';
import { Chamada } from '../../model/Chamadas';
import { FreqMenbro } from '../../model/FreqMenbro';

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
  chamada: Chamada = new Chamada();
  freqMenbro: FreqMenbro[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private MenbrosProvider: MenbrosProvider) {
  }
  getM() {
    this.menbros = this.MenbrosProvider.get();
    console.log(this.freqMenbro);
  }
  add(teste){
    console.log(teste);
    //this.chamada.freq = 5;
    console.log(this.chamada);

    
  }

  ionViewDidLoad() {
    this.getM();
    console.log('ionViewDidLoad ChamadaAddPage');
  }

}
