import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MenbrosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MenbrosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MenbrosProvider Provider');
  }
  getMenbros():Promise<any>{
    return this.http.get('http://192.168.56.1:3000/menbros').toPromise();
  }

}
