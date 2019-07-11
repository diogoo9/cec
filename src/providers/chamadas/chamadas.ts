import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chamada } from '../../model/Chamadas';
import { AppModule } from '../../app/app.module';


@Injectable()
export class ChamadasProvider {
  url: String = AppModule.getEndPoint();
  constructor(public http: HttpClient) {
    console.log('Hello ChamadasProvider Provider');
  }

  save(chamada: Chamada): Promise<any> {
    console.log(chamada)
    return this.http.post(`${this.url}/chamada/`, chamada, { 
      headers: {  'Content-Type': 'application/json'  } 
    }).toPromise().then(data => {  

    }).catch((err) => {
      console.log(err);
    })
  }

  get():Promise<any>{
    return this.http.get(`${this.url}/chamada/`).toPromise().then();
  }

}

