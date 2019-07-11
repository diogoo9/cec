import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menbro } from '../../model/Menbro';
import { AppModule } from '../../app/app.module';


@Injectable()
export class MenbrosProvider {
  menbros: Menbro[] = [];
  url: String = AppModule.getEndPoint();
  
  constructor(public http: HttpClient) {
    console.log('Hello MenbrosProvider Provider');
  }



  get():Promise<any> {
    this.menbros = [];
   return this.http.get(`${this.url}/menbros/`).
      toPromise().then();
  }

  getMembroFromIdCelula(id){
    this.menbros = [];
    return this.http.get(`${this.url}/menbrosFromIdCelula/${id}`).toPromise().then();
  }

  getMembroFormId(id):Promise<any> {
    this.menbros = [];
   return this.http.get(`${this.url}/chamada/${id}`).
      toPromise().then();
  }

  save(menbro: Menbro): Promise<any> {
    console.log(menbro);
    return this.http.post(`${this.url}/menbro/`, menbro, {
      headers: { 'Content-Type': 'application/json' }
    }).toPromise().then(data => {


      // this.toast.show('dados salvos','500','center').subscribe();
    }).catch((err) => {
      console.log(err);
    })
  }

  update(menbro: Menbro): Promise<any> {
    console.log(menbro);
    return this.http.put(`${this.url}/menbro/`, menbro, {
      headers: { 'Content-Type': 'application/json' }
    }).toPromise().then(data => {
      return data;
    }).catch((err) => {
      console.log(err);
    })
  }

  
}
