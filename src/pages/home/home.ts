import { Component } from '@angular/core';
import { NavController, MenuController, Toast, ToastController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { Menbro } from '../../model/Menbro';
import { LoginProvider } from '../../providers/login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  menbro: Menbro = new Menbro();

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public LoginProvider: LoginProvider, public toast: ToastController) {

  }
  aviso(msg: string) {
    const toast = this.toast.create({
      message: msg,
      duration: 3000
    })
    toast.present();
  }



  login() {

    this.LoginProvider.autenticar(this.menbro.nome, this.menbro.senha).then((dado) => {
      
      if (this.menbro.nome == undefined || this.menbro.senha == undefined) {
        this.aviso('preencha os canpos');
      } else if (dado[0] == undefined) {
        this.aviso('usuario ou senha incorreta');
      } else {
        this.navCtrl.setRoot(InicioPage);
      }
      //this.navCtrl.setRoot(InicioPage);
    })
  };


  ionViewDidLoad() {
    this.menuCtrl.enable(false);
  }



}



