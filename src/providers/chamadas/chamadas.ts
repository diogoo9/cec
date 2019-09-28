import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chamada } from '../../model/Chamadas';
import { AppModule } from '../../app/app.module';
import { Storage } from '@ionic/storage';


@Injectable()
export class ChamadasProvider {
  url: String = AppModule.getEndPoint();
  constructor(public http: HttpClient, public storage: Storage) {
    console.log('Hello ChamadasProvider Provider');
  }

  async save(chamada: Chamada): Promise<any> {
    console.log(chamada);

    var token = await this.storage.get('token');
    return this.http.post(`${this.url}/chamada/`, chamada, {
      headers: { 'Content-Type': 'application/json', 'authorization': token }
    }).toPromise().then(data => {
      return data;
    }).catch((err) => {
      return err;
    })
  }

  async get(idCelula): Promise<any> {
    var token = await this.storage.get('token');
    return this.http.get(`${this.url}/chamada/${idCelula}`,
      { headers: { 'Content-Type': 'application/json', 'authorization': token } }
    ).toPromise().then(data=>{
       return data
    }).catch(err=>{
      return err;
    })
  }

  async getMembrosFromChamada(id) {
    var token = await this.storage.get('token');
    return this.http.get(`${this.url}/chamada/${id}`,
      { headers: { 'Content-Type': 'application/json', 'authorization': token } }
    ).toPromise().then();
  }

}

