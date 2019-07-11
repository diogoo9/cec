import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppModule } from '../../app/app.module';

@Injectable()
export class LoginProvider {
  endPoint = AppModule.getEndPoint();
  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }

  logar(email, password): Promise<any> {
    return this.http.post(`${this.endPoint}/auth`,
      {
        email: 'erick',
        password: '123456'
      },
      {
        headers: { 'Content-Type': 'application/json' }
      }).toPromise();
    
  }

}
