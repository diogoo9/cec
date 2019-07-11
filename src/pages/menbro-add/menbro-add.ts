import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toast, ToastController, AlertController } from 'ionic-angular';
import { Menbro } from '../../model/Menbro';
import { MenbrosProvider } from '../../providers/menbros/menbros';
import { MenbrosPage } from '../menbros/menbros';
import { LocalizacoesProvider } from '../../providers/localizacoes/localizacoes';
import { BrMaskerIonic3, BrMaskModel } from 'brmasker-ionic-3';

/**
 * Generated class for the MenbroAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menbro-add',
  templateUrl: 'menbro-add.html',
  providers: [BrMaskerIonic3]
})
export class MenbroAddPage {
  menbro: Menbro = new Menbro();
  estados = [];
  municipios = [];
  sexo = ["M", "F"];
  sangue = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController,
    private MenbrosProvider: MenbrosProvider,
    private localizacoesProvider: LocalizacoesProvider,
    public BrMaskerIonic3: BrMaskerIonic3,
    public alertController: AlertController) {

    console.log(this.navParams);
    if (this.navParams.data.id != undefined) {
      this.menbro = navParams.data;
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
    this.menbro.id_discipulador = 1;
    this.MenbrosProvider.save(this.menbro).then((dado) => {
      if (dado.Menbro != undefined) {
        this.aviso("salvo com sucesso");
        this.navCtrl.setRoot(MenbrosPage);
      } else {
        this.aviso("erro, verifique todos os campos digitaso")
      }

    }).catch((erro) => {
      this.aviso(erro);
    })
  }

  validarCampos() {
    let camposIncompletos = '';
    if (this.menbro.nome == '') {
      camposIncompletos += 'Nome <br/>';
    } if (this.menbro.sexo == '') {
      camposIncompletos += 'Sexo <br/>';
    } if (this.menbro.cpf == '') {
      camposIncompletos += 'CPF <br/>';
    } if (this.menbro.email == '') {
      camposIncompletos += `E-mail <br/>`;
    } if (this.menbro.estado == '') {
      camposIncompletos += 'Estado <br/>';
    } if (this.menbro.cidade == '') {
      camposIncompletos += 'Cidade <br/>';
    }
    if (camposIncompletos.length > 1) {
      this.presentAlert("campos obrigatórios", camposIncompletos);
      return false;
    } else {
      return true;
    }

  }
  update() {
    if (this.validarCampos()) {
      this.menbro.id_discipulador = 1;
      this.MenbrosProvider.update(this.menbro).then((dado) => {        
        this.aviso("salvo com sucesso");
        this.navCtrl.setRoot(MenbrosPage);
      }).catch((erro) => {
        this.aviso(erro);
      })
    }

  }

  ionViewDidLoad() {
    this.carregarEstados();
    this.carregarMunicipios(this.menbro.estado);
    console.log('ionViewDidLoad MenbroAddPage');

  }

}
