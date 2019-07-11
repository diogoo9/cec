import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CelulaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CelulaProvider {
  url: String = "http://192.168.137.1:3000";

  constructor(public http: HttpClient) {
    console.log('Hello CelulaProvider Provider');
  }

  get():Promise<any>{
   return this.http.get(`${this.url}/getCelulas/`).toPromise().then();
  }

}
