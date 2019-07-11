import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChamadaAddPage } from '../chamada-add/chamada-add';
import { Chamada } from '../../model/Chamadas';
import { HttpClient } from '@angular/common/http';
import { ChamadasProvider } from '../../providers/chamadas/chamadas';

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
     chamadas: Chamada[] = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public ChamadasProvider: ChamadasProvider) {
    }
    getChamadas(){
      this.ChamadasProvider.get().then((calls)=>{
        calls.forEach((chamada) => {
          this.chamadas.push({
            id: chamada.id_chamada,
            dsc: chamada.dsc,
            data: chamada.data,
            presents: chamada.presents,
            faults: chamada.faults,
            total: chamada.total
          });
        });
      })
    }
    
    chamadaAdd() {
      this.navCtrl.push(ChamadaAddPage);
    }  

    goMembro(chamada){
      this.navCtrl.push(ChamadaAddPage, chamada);
      
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad ChamadasPage');
      this.getChamadas();
      console.log(this.chamadas);
    }

}
