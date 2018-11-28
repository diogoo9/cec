import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InicioPageModule } from '../pages/inicio/inicio.module';
import { MenbrosPageModule } from '../pages/menbros/menbros.module';
import { MenbrosProvider } from '../providers/menbros/menbros';
import { HttpClientModule } from '@angular/common/http';
import { LoginProvider } from '../providers/login/login';
import { MenbroPageModule } from '../pages/menbro/menbro.module';
import { ChamadasPageModule } from '../pages/chamadas/chamadas.module';
import { ChamadasProvider } from '../providers/chamadas/chamadas';
import { MenbroAddPageModule } from '../pages/menbro-add/menbro-add.module';
import { ChamadaAddPageModule } from '../pages/chamada-add/chamada-add.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    InicioPageModule,
    MenbrosPageModule,
    MenbroPageModule,
    ChamadasPageModule,
    MenbroAddPageModule,
    ChamadaAddPageModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MenbrosProvider,
    LoginProvider,
    ChamadasProvider
  ]
})
export class AppModule {}
