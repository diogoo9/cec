import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AppModule } from '../../app/app.module';
/*
  Generated class for the CelulaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CelulaProvider {
    
    url: String = AppModule.getEndPoint();
    constructor(public http: HttpClient, public storage: Storage) {
        console.log('Hello CelulaProvider Provider');
    }

    async get(): Promise<Object> {
        var token = await this.storage.get('token');
        return this.http.get(`${this.url}/getCelulas/`,
            { headers: { 'Content-Type': 'application/json', 'authorization': token } }
        ).toPromise().then(data=>{
            return data;
        }).catch(err=>{
            return err;
        });
    }

    async getCelulaFromLider(): Promise<any> {
        var token = await this.storage.get('token');
        return this.http.get(`${this.url}/celulaFromLider/`,
            { headers: { 'Content-Type': 'application/json', 'authorization': token } }
        ).toPromise().then((data => {
            return data;
        })
        ).catch(err => {
            return err;
        })
    }
}
