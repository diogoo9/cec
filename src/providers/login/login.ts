import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppModule } from '../../app/app.module';
import { Storage } from '@ionic/storage';


@Injectable()
export class LoginProvider {
    endPoint = AppModule.getEndPoint();
    constructor(
        public http: HttpClient,
        private storage: Storage) {

        console.log('Hello LoginProvider Provider');
    }

    logar(email, password): Promise<any> {
        console.log(email, password);
        return this.http.post(`${this.endPoint}/auth`,
            { email: email, password: password },
            { headers: { 'Content-Type': 'application/json' } }
        ).toPromise().then((res) => {
            console.log(res);
            return res;
        }).catch(err => {
            console.log(err);
            return err;
        });
    }


    async alterPass(conta): Promise<any> { 
        var token = await this.storage.get('token');
        return this.http.post(`${this.endPoint}/alterPassword/`, conta, {
          headers: { 'Content-Type': 'application/json', 'authorization': token }
        }).toPromise().then(data => {
          return data;
        }).catch((err) => {
          return err;
        })
      }

}
