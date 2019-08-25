import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppModule } from '../../app/app.module';
import { Storage } from '@ionic/storage';

@Injectable()
export class LocalizacoesProvider {
    url: String = AppModule.getEndPoint();

    constructor(public http: HttpClient, public storage: Storage) {
        console.log('Hello LocalizacoesProvider Provider');
    }

    async getEstados() {
        var token = await this.storage.get('token');
        return this.http.get(`${this.url}/getEstados`,
            { headers: { 'Content-Type': 'aplication/json', 'authorization': token } }
        ).toPromise();
    }

    async getMunicipios(uf) {
        var token = await this.storage.get('token');
        return this.http.get(`${this.url}/getMunicipioFromUf/${uf}`,
            { headers: { 'Content-Type': 'aplication/json', 'authorization': token } }
        ).toPromise();
    }
}
