import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { MenbrosProvider } from '../../providers/menbros/menbros';
import { Menbro } from '../../model/Menbro';
import { Chamada } from '../../model/Chamadas';
import { ChamadasProvider } from '../../providers/chamadas/chamadas';
import { FreqMenbro } from '../../model/FreqMenbro';
import { CelulaProvider } from '../../providers/celula/celula';

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
   //freqMenbro: boolean[] = [];
   chamada: Chamada = new Chamada();
   freq = [];
   celulas = [];
   noEditable = false;

   constructor(
      public navCtrl: NavController,
      public toastCtrl: ToastController,
      public navParams: NavParams,
      private MenbrosProvider: MenbrosProvider,
      private ChamadasProvider: ChamadasProvider,
      private CelulaProvider: CelulaProvider,
      public alertController: AlertController) {

      if (this.navParams.data.id != undefined) {
         this.noEditable = true;
         this.chamada = this.navParams.data;
         this.ChamadasProvider.getMembrosFromChamada(this.chamada.id).then((dados: any) => {
            dados.forEach(dado => {
               this.freq.push({
                  id: dado.id_membro,
                  present: dado.present,
                  nome: dado.nome
               })
            });
         })
         //this.getMembrosFromId(this.navParams.data.id);
      } else {
      }
   }
   getCelulas() {
      this.CelulaProvider.get().then((dados: any) => {
         dados.forEach(element => {
            this.celulas.push(element);
            console.log(element.nome);
         });
      })
   }

   getM() {
      this.MenbrosProvider.getMembroFromIdCelula(this.chamada.id_celula).then((dados: any) => {
         dados.forEach((dado) => {
            this.freq.push({ id: dado.id, present: true, nome: dado.nome });
            this.menbros.push({
               id: dado.id,
               id_discipulador: dado.id_discipulador,
               nome: dado.nome,
               id_celula: dado.id_celula,
               cpf: dado.cpf,
               email: dado.email,
               celular: dado.celular,
               nascimento: dado.nascimento,
               rua: dado.rua,
               num: dado.num,
               bairro: dado.bairro,
               cidade: dado.cidade,
               estado: dado.estado,
            });
         });
         if (this.menbros.length == 0) {
            this.aviso("nenhum Membro cadastrado na célula");
         }
      });

      //gerar dados com id do user
      this.menbros.forEach((dado) => {
         console.log(dado.id);
      });
      console.log("Tam:" + this.menbros.length);
   }

   getMembrosFromId(id) {
      this.MenbrosProvider.getMembroFormId(id).then((dados) => {
         dados.forEach((dado) => {
            if (dado.id_menbro == 8 || dado.id_menbro === 5) {
               this.freq.push({ id_membro: dado.id_menbro, present: false, nome: dado.nome });
            } else {
               this.freq.push({ id_membro: dado.id_menbro, present: true, nome: dado.nome });
            }
            this.menbros.push({
               id: dado.id,
               nome: dado.nome

            })

         });
      });
   }

   che(idMembro) {
      this.menbros = [];
      this.freq = [];
      this.getM();
   }

   aviso(msg: string) {
      const toast = this.toastCtrl.create({
         message: msg,
         duration: 3000,
         position: 'top'
      })
      toast.present();
   }

   async presentAlert(titulo, sub) {
      const alert = await this.alertController.create({
         title: titulo,
         subTitle: sub,
         buttons: ['ok']
      });
      await alert.present();
   }

   add() {
      this.chamada.freq = this.freq;
      console.log(this.chamada);
      if (!this.chamada.dsc) {
         this.aviso("Descrição é obrigatório");
      } else if (!this.chamada.data) {
         this.aviso("Preencha o campo da data");
      } else {
         console.log("certo ");
         this.ChamadasProvider.save(this.chamada).then(data => {
            if (data.error) {
               this.presentAlert("Falha", "falha na comunicação com o servidor");
            } else {
               this.aviso("salvo com sucesso");
            }
         });
      }
   }


   ionViewDidLoad() {
      console.log('ionViewDidLoad ChamadaAddPage');
      console.log(this.freq);
      console.log(this.chamada);
      this.getCelulas();
      console.log(this.celulas);
   }

}
