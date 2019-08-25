import { Component } from '@angular/core';
import { NavController, MenuController, ToastController, AlertController } from 'ionic-angular';
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

  constructor(
    public navCtrl: NavController, 
    public menuCtrl: MenuController, 
    public LoginPVD: LoginProvider, 
    public toast: ToastController, 
    private storage: Storage, 
    private alertController: AlertController) {

  }
  aviso(msg: string) {
    const toast = this.toast.create({
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

  async login() {
    console.log(this.menbro);
    if (this.menbro.nome == undefined || this.menbro.senha == undefined || this.menbro.senha == "" || this.menbro.nome == "") {
      this.presentAlert("campo incompleto","preencha os campos! ");
    } else {
      
      try {
        let dados = await this.LoginPVD.logar(this.menbro.nome, this.menbro.senha); 
        console.log(dados);
        if(dados.token){
          this.storage.set('token',dados.token);
          this.storage.set('userName',dados.usuario.nome);
          this.storage.set('dados',dados.usuario);
          this.navCtrl.setRoot(InicioPage);
        }else{
          console.log("ok");
          this.presentAlert("dados inválidos","usuario ou senha icorreta");
        }

      } catch (error) {
        console.log(error);
      }
      ;
    }
  };


  ionViewDidLoad() {
    this.menuCtrl.enable(false);
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



