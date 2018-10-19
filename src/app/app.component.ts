import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MenbrosPage } from '../pages/menbros/menbros';
import { InicioPage } from '../pages/inicio/inicio';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  paginas: {descricao: string, pagina: any, icon: string}[]= [
    {descricao: "menbros", pagina: MenbrosPage, icon: "person"},
    {descricao: "célula", pagina: MenbrosPage, icon: "people"}
  ]

  @ViewChild('nav')
  navCtrl: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  nextPage(pagina){
    this.navCtrl.setRoot(pagina);
  }
  
  exit(){
    this.navCtrl.setRoot(HomePage);
  }

}

