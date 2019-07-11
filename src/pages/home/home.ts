import { Component } from '@angular/core';
import { NavController, MenuController, Toast, ToastController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { Menbro } from '../../model/Menbro';
import { LoginProvider } from '../../providers/login/login';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  menbro: Menbro = new Menbro();

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public LoginPVD: LoginProvider, public toast: ToastController, private storage: Storage) {

  }
  aviso(msg: string) {
    const toast = this.toast.create({
      message: msg,
      duration: 3000
    })
    toast.present();
  }

  async login() {
    if (this.menbro.nome == undefined || this.menbro.senha == undefined || this.menbro.senha == "" || this.menbro.nome == "") {
      this.aviso('preencha os canpos');
    } else {
      try {
        let dados = await this.LoginPVD.logar(this.menbro.nome, this.menbro.senha).then();        
        if(dados.token){
          this.storage.set('token',dados.token);
          this.navCtrl.setRoot(InicioPage);
        }

      } catch (error) {
        console.log(error);
      }
      ;
    }
  };


  ionViewDidLoad() {
    this.menuCtrl.enable(true);
    this.verificaToken();
  }

  async verificaToken(){
    let token = await this.storage.get('token');
    if(token){
      console.log(token);
      this.navCtrl.setRoot(InicioPage);
    }else{
    }
  }


}



