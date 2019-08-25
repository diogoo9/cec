import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';
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
    celulas = [];
    idCelula ;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public menuCtrl: MenuController,
        private MenbrosProvider: MenbrosProvider,
        public loadingController: LoadingController,
        private LoadingCtrl: LoadingController,
        public CelulaProvider: CelulaProvider) {
    }


    getMembros() {
        this.menbros =[];
        this.MenbrosProvider.get(this.idCelula).then((dados) => {
            dados.forEach((dado) => {
                this.menbros.push(dado);
                console.log(this.menbros);
            });
            this.isLoading = false;
        })
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
        if(this.isLoading){
            loader.present();
        }else{
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
            console.log(dados);
            dados.forEach(element => {
                this.celulas.push(element);
            });
        })
    }
    listarMenbros(){
        console.log(this.idCelula);
    }

    ionViewDidLoad() {
        this.menuCtrl.enable(true);
        //this.getMembros();
        this.getCelulas();
    }


}
