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
  membrosbkp: Menbro[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, private MenbrosProvider: MenbrosProvider) {
  }

  getM() {
    this.MenbrosProvider.get().then((dados) => {
      dados.forEach((dado) => {
        this.menbros.push(dado);
      });

    })
    this.membrosbkp = this.menbros;
  }
  goMenbro(menbro: Menbro) {
    this.navCtrl.push(MenbroAddPage, menbro);
  }
  addMenbro() {
    this.navCtrl.push(MenbroAddPage);
  }


  ionViewDidLoad() {
    this.menuCtrl.enable(true);
    this.getM();
    console.log(this.menbros);
  }
  search(val ) {
    console.log(val.target.value);
    this.menbros = this.membrosbkp.filter((membro)=>{
      return membro.nome.includes(val.target.value);
    })
  }

}
