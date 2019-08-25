import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AppModule } from '../../app/app.module';
import { LoginProvider } from '../../providers/login/login';
import { containerEnd } from '@angular/core/src/render3/instructions';

/**
 * Generated class for the ContaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conta',
  templateUrl: 'conta.html',
})
export class ContaPage {
  conta = { nome: "", email: "", currentPass: "", newPass: "", newPassConfirm: "" };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loginProvider: LoginProvider,
    public alertCtrl: AlertController) {

    let dados = this.navParams.get("dados");
    this.conta.nome = dados.nome;
    this.conta.email = dados.email;
    console.log(this.navParams)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContaPage');
  }

  alterPass() {
    console.log(this.conta);
    let aviso = "";
    if (this.conta.currentPass.length < 5) {
      aviso += "<br>- Senha atual muito curta";
    }
    if (this.conta.newPass.length <= 4) {
      aviso += "<br>- Nova senha muito curta";
    }
    if (this.conta.newPass != this.conta.newPassConfirm) {
      aviso += "<br>- A nova senha não confere com a confirmação";
    }

    if (aviso.length > 0) {
      this.showAlert("aviso", aviso);
    } else {
      console.log("foi");
    }
    /*
    this.loginProvider.alterPass(this.conta)
      .then((result) => {

        this.showAlert("aviso", result.message);


      })*/
  }

  showAlert(title, text) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

}
