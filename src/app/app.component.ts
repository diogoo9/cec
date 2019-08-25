import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MenbrosPage } from '../pages/menbros/menbros';
import { ChamadasPage } from '../pages/chamadas/chamadas';
import { ChamadaAddPage } from '../pages/chamada-add/chamada-add';
import { Storage } from '@ionic/storage';
import { InicioPage } from '../pages/inicio/inicio';
import { ContaPage } from '../pages/conta/conta';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  paginas: {descricao: string, pagina: any, icon: string}[]= [
    {descricao: "Home", pagina: InicioPage, icon: "home"},
    {descricao: "Membros", pagina: MenbrosPage, icon: "person"},
    {descricao: "Chamadas", pagina: ChamadasPage, icon: "list-box"}
  ];
  userName;

  @ViewChild('nav')
  navCtrl: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: Storage, private storageCrtl: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();      
    });
    this.setUserName();
  }
  nextPage(pagina){
    this.navCtrl.setRoot(pagina);
  }
  
  exit(){
    this.storage.remove('token');    
    this.storage.remove('dados');
    this.navCtrl.setRoot(HomePage);
  }

  async setUserName(){
    this.userName = await this.storage.get('userName');
    return this.userName;
  }

  async editarConta(){
    let dados = await  this.storage.get('dados');
    console.log(dados);
    this.navCtrl.setRoot(ContaPage,{'dados':dados});
  }  

}

