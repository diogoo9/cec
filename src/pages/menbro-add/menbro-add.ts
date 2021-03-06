import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toast, ToastController, AlertController } from 'ionic-angular';
import { Menbro } from '../../model/Menbro';
import { MenbrosProvider } from '../../providers/menbros/menbros';
import { LocalizacoesProvider } from '../../providers/localizacoes/localizacoes';
import { BrMaskerIonic3 } from 'brmasker-ionic-3';
import { CelulaProvider } from '../../providers/celula/celula';


@IonicPage()
@Component({
   selector: 'page-menbro-add',
   templateUrl: 'menbro-add.html',
   providers: [BrMaskerIonic3]
})
export class MenbroAddPage {
   //vars
   menbro: Menbro = new Menbro();
   estados = [];
   municipios = [];
   sexo = ["M", "F"];
   sangue = ["Ñs", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
   celulas = [];
   idEstado;


   constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private toast: ToastController,
      private MenbrosProvider: MenbrosProvider,
      private localizacoesProvider: LocalizacoesProvider,
      public BrMaskerIonic3: BrMaskerIonic3,
      public alertController: AlertController,
      public CelulaProvider: CelulaProvider) {      
      
      if (this.navParams.data.id != undefined) {
         this.menbro = navParams.data;
         console.log(navParams.data)
      }
   }

   carregarEstados() {
      this.localizacoesProvider.getEstados().then((dados: any) => {
         dados.forEach(element => {
            this.estados.push(element);
         });
      })
   }

   carregarMunicipios(event) {
      this.municipios = [];
      console.log(event);
      this.localizacoesProvider.getMunicipios(event).then((dados: any) => {
         dados.forEach(element => {
            this.municipios.push(element);
         });
      })
   }

   getCelulas() {
      this.CelulaProvider.getCelulaFromLider().then((dados: any) => {
         dados.forEach(element => {
            this.celulas.push(element);
            console.log(element.nome);
         });

      })
   }

   async presentAlert(titulo, sub) {
      const alert = await this.alertController.create({
         title: titulo,
         subTitle: sub,
         buttons: ['ok']
      });
      await alert.present();
   }

   aviso(msg: string) {
      const toast = this.toast.create({
         message: msg,
         duration: 3000
      })
      toast.present();
   }

   insert() {     
      if (!this.menbro.nome || !this.menbro.nascimento || !this.menbro.id_celula) {
         this.presentAlert("Aviso", "verifique se os seguintes campos estão preenchidos: <br> <br> - nome <br> - data de nascimento");
      } else {
         this.menbro.senha = '';
         this.MenbrosProvider.save(this.menbro).then((dado) => {
            console.log(dado);
            if (dado.status == 0) {
               console.log(dado);
               this.menbro.id = undefined;
               this.presentAlert("Erro", "falha na comunicação com o servidor");
            } else {
               this.aviso("alteração salva com sucesso");
               //this.navCtrl.setRoot(MenbrosPage);
            }

         }).catch((erro) => {
            this.aviso(erro);
         })
      }
   }

   update() {
      this.menbro.id_discipulador = 1;
      var inputsNull = false;
      Object.keys(this.menbro).map((data) => {
         if (this.menbro[data] == undefined || this.menbro[data] == '') {
            console.log(`${data} ${this.menbro[data]}`);
            inputsNull = true;
         }
      });
      if (inputsNull) {
         this.presentAlert("Aviso", "preencha todos os campos");
      } else {
         this.MenbrosProvider.update(this.menbro).then((dado) => {
            console.log(dado);
            if (dado.status == 0) {
               this.presentAlert("Erro", "falha na comunicação com o servidor");
            } else {
               this.aviso("alteração salva com sucesso");
               //this.navCtrl.setRoot(MenbrosPage);
            }
         }).catch((erro) => {
            this.aviso(erro);
         })
      }
   }

   ionViewDidLoad() {
      this.getCelulas();
      this.carregarEstados();
      if(this.menbro.estado){
         this.carregarMunicipios(this.menbro.estado);
      }
      console.log('ionViewDidLoad MenbroAddPage');
   }

}
