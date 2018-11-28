import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Menbro } from '../../model/Menbro';
import { MenbrosProvider } from '../../providers/menbros/menbros';
import { MenbroAddPage } from '../menbro-add/menbro-add';

/**
 * Generated class for the MenbrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menbros',
  templateUrl: 'menbros.html',
})
export class MenbrosPage {
  menbros: Menbro[] = [];

  /* menbros: Menbro[] = [
     new Menbro(1,1,"Diogo","985247-55","147.258.369-10","rua x ","teste@teste.com","(82) 99999-8888"),
     new Menbro(1,1,"Lemuel","985247-55","147.258.369-10","rua x ","teste@teste.com","(82) 99999-8888"),
     new Menbro(1,1,"Edvan","985247-55","147.258.369-10","rua x ","teste@teste.com","(82) 99999-8888"),
     new Menbro(1,1,"Erick","985247-55","147.258.369-10","rua x ","teste@teste.com","(82) 99999-8888"),
   ];
   */



  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, private MenbrosProvider: MenbrosProvider) {
  }

  getM() {

    this.menbros = this.MenbrosProvider.get();
    console.log(this.menbros.length);
  }
  goMenbro(menbro: Menbro) {
    this.navCtrl.push(MenbroAddPage, menbro);
  }
  addMenbro() {
    this.navCtrl.setRoot(MenbroAddPage);
  }


  ionViewDidLoad() {

    this.menuCtrl.enable(true);
    this.getM();

  }

}
