import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChamadaAddPage } from '../chamada-add/chamada-add';
import { Chamada } from '../../model/Chamadas';
import { HttpClient } from '@angular/common/http';
import { ChamadasProvider } from '../../providers/chamadas/chamadas';
import { CelulaProvider } from '../../providers/celula/celula';

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
    celulas = [];
    idCelula = 0;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public http: HttpClient,
        public ChamadasProvider: ChamadasProvider,
        private CelulaProvider: CelulaProvider) {
    }
    getChamadas() {
        this.chamadas = [];
        this.ChamadasProvider.get(this.idCelula).then((calls) => {
            if (calls.length != 0) {
                calls.forEach((chamada) => {
                    console.log(chamada);
                    this.chamadas.push({
                        id: chamada.id_chamada,
                        dsc: chamada.dsc,
                        data: chamada.data.substring(0, 10),
                        id_celula: chamada.id_celula,
                        presents: chamada.presents,
                        faults: chamada.faults,
                        total: chamada.total
                    });
                });
            }

        }).catch(err=>{
            console.log(err);
        });
        this.idCelula = this.celulas[0];
    }

    chamadaAdd() {
        this.navCtrl.push(ChamadaAddPage);
    }

    goMembro(chamada) {
        this.navCtrl.push(ChamadaAddPage, chamada);
    }

    getCelulas() {
        this.CelulaProvider.get().then((dados: any) => {
            this.idCelula = dados[0].id_celula;
            this.getChamadas();
            dados.forEach(element => {
                this.celulas.push(element);
            });
        })
    }  

    ionViewDidLoad() {
        console.log('ionViewDidLoad ChamadasPage');
        this.getCelulas();
    }

}
