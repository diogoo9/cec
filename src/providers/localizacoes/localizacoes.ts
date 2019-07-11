import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppModule } from '../../app/app.module';


@Injectable()
export class LocalizacoesProvider {
  url: String = AppModule.getEndPoint();

  constructor(public http: HttpClient) {
    console.log('Hello LocalizacoesProvider Provider');
  }

  getEstados(){
    return this.http.get(`${this.url}/getEstados`).toPromise();
  }
  getMunicipios(uf){
    return this.http.get(`${this.url}/getMunicipioFromUf/${uf}`).toPromise();
  }
}
