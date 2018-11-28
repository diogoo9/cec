import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toast, ToastController } from 'ionic-angular';
import { Menbro } from '../../model/Menbro';
import { MenbrosProvider } from '../../providers/menbros/menbros';
import { MenbrosPage } from '../menbros/menbros';

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
})
export class MenbroAddPage {
  menbro: Menbro = new Menbro();
 
  constructor(public navCtrl: NavController, public navParams: NavParams,private toast: ToastController, private MenbrosProvider: MenbrosProvider) {
     console.log(navParams.data.id);
     if(navParams.data.id != undefined){
        console.log("ok");
        this.menbro = navParams.data;
     }
  }

  aviso(msg: string) {
    const toast = this.toast.create({
      message: msg,
      duration: 3000
    })
    toast.present();
  }

  insert(){
    this.menbro.id_discipulador = 1;
    this.MenbrosProvider.save(this.menbro).then((dado) =>{
      if (dado.Menbro != undefined){
        this.aviso("salvo com sucesso");
        this.navCtrl.setRoot(MenbrosPage);
      }else{
        this.aviso("erro, verifique todos os campos digitaso")
      }
      
    }).catch((erro)=>{
      this.aviso(erro);
    })
  }
  update(){
    this.menbro.id_discipulador = 1;
    this.MenbrosProvider.update(this.menbro).then((dado) =>{
      this.aviso("salvo com sucesso");
      this.navCtrl.setRoot(MenbrosPage);
    }).catch((erro)=>{
      this.aviso(erro);
    })
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad MenbroAddPage');
  }

}
