import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menbro } from '../../model/Menbro';
import { AppModule } from '../../app/app.module';
import { Storage } from '@ionic/storage';

@Injectable()
export class MenbrosProvider {
   menbros: Menbro[] = [];
   url: String = AppModule.getEndPoint();

   constructor(public http: HttpClient, public storage: Storage) {
      console.log('Hello MenbrosProvider Provider');
   }

   async get(idCelula): Promise<any> {
      this.menbros = [];
      var token = await this.storage.get('token');
      return this.http.get(`${this.url}/menbrosFromIdCelula/${idCelula}`,
         { headers: { 'Content-Type': 'application/json', 'authorization': token } }
      ).toPromise().then();
   }

   async getMembroFromIdCelula(idCelula) {
      this.menbros = [];
      var token = await this.storage.get('token');
      return this.http.get(`${this.url}/menbrosFromIdCelula/${idCelula}`,
         { headers: { 'Content-Type': 'application/json', 'authorization': token } }
      ).toPromise().then();
   }

   async getMembroFormId(id): Promise<any> {
      this.menbros = [];
      var token = await this.storage.get('token');
      return this.http.get(`${this.url}/chamada/${id}`,
         { headers: { 'Content-Type': 'application/json', 'authorization': token } }
      ).toPromise().then();
   }

   async save(menbro: Menbro): Promise<any> {
      console.log(menbro);
      var token = await this.storage.get('token');
      return this.http.post(`${this.url}/menbro/`, menbro,
         { headers: { 'Content-Type': 'application/json', 'authorization': token } }
      ).toPromise().then(data => {
         return data;
      }).catch((err) => {
         return err;
      })
   }

   async update(menbro: Menbro): Promise<any> {
      var token = await this.storage.get('token');
      return this.http.put(`${this.url}/menbro/`, menbro,
         { headers: { 'Content-Type': 'application/json', 'authorization': token  } }
      ).toPromise().then(data => {
         return data;
      }).catch((err) => {
         return err;
      })
   }


}
