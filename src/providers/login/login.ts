import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }

  autenticar(nome: string,senha: string):Promise<any>{
    return this.http.get(`http://192.168.56.1:3000/menbro/${nome}/${senha}`).toPromise();
    
  }

}
