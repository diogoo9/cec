import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, AlertController } from 'ionic-angular';
import { Menbro } from '../../model/Menbro';
import { MenbrosProvider } from '../../providers/menbros/menbros';
import { MenbroAddPage } from '../menbro-add/menbro-add';
import { CelulaProvider } from '../../providers/celula/celula';


@IonicPage()
@Component({
    selector: 'page-menbros',
    templateUrl: 'menbros.html',
})
export class MenbrosPage {
    menbros: Menbro[] = [];
    membrosbkp: Menbro[] = [];
    isLoading = true;
    celulas: Array<any> = [];
    celulas2: Array<any> = ["1","2"];
    idCelula;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public menuCtrl: MenuController,
        private MenbrosProvider: MenbrosProvider,
        public loadingController: LoadingController,
        private LoadingCtrl: LoadingController,
        public CelulaProvider: CelulaProvider,
        public AlertCtrl: AlertController) {
    }

    async alert(titulo, sub) {
        const alert = await this.AlertCtrl.create({
            title: titulo,
            subTitle: sub,
            buttons: ['ok']
        });
        await alert.present();
    }

    getMembros() {         
        this.menbros = [];
        this.MenbrosProvider.get(this.idCelula).then((dados) => {
            if(dados.length == 0){
                console.log("nenhum");
                this.alert("Aviso","não existem dados para célula selecionada");
            }else{
                dados.forEach((dado) => {
                    dado.nascimento = dado.nascimento.substr(0,10);
                    this.menbros.push(dado);
                    console.log(this.menbros);
                });
            }            
            this.isLoading = false;
        })
        this.idCelula = this.celulas[0];
        this.membrosbkp = this.menbros;
    }

    goMenbro(menbro: Menbro) {
        this.navCtrl.push(MenbroAddPage, menbro);
    }

    addMenbro() {
        this.navCtrl.push(MenbroAddPage);
    }

    async presentLoading() {
        const loader = this.LoadingCtrl.create({
            content: "carraegando dados...",
        });
        if (this.isLoading) {
            loader.present();
        } else {
            loader.dismiss();
        }
    }

    search(val) {
        console.log(val.target.value);
        this.menbros = this.membrosbkp.filter((membro) => {
            return membro.nome.includes(val.target.value);
        })
    }
    getCelulas() {        
        this.CelulaProvider.get().then((dados: any) => {
        this.idCelula  = dados[0].id_celula;             
        this.getMembros();
        console.log(this.celulas);
            dados.forEach(element => {
                this.celulas.push(element);
            });
        })
    }

    listarMenbros() {
        console.log(this.idCelula);
    }

    ionViewDidLoad() {
        this.menuCtrl.enable(true);
        this.getCelulas();   
    }


}
