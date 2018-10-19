import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Menbro } from '../../model/Menbro';
import { MenbrosProvider } from '../../providers/menbros/menbros';

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
    this.MenbrosProvider.getMenbros().then((dados) => {
      
      dados.forEach((dado) => {
        this.menbros.push({
          id: dado.id_menbro,
          id_discipulador: dado.id_discipulador,
          nome: dado.nome,
          rg: dado.rg,
          cpf: dado.cpf,
          email: dado.email,
          celular: dado.celular,
          nascimento: dado.nascimento,
          rua: dado.rua,
          num: dado.num,
          bairro: dado.bairro,
          cidade: dado.cidade,
          estado: dado.estado 
        })
      });
    })

  }


  ionViewDidLoad() {

    console.log(this.menbros.length);
    this.menuCtrl.enable(true);
    this.getM();

  }

}
