import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Menbro } from '../../model/Menbro';
import { MenbrosProvider } from '../../providers/menbros/menbros';

/**
 * Generated class for the MenbroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menbro',
  templateUrl: 'menbro.html',
})
export class MenbroPage {
  menbro: Menbro = new Menbro();

  constructor(public navCtrl: NavController, public navParams: NavParams, public MenbrosProvider: MenbrosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenbroPage');
  }

}
