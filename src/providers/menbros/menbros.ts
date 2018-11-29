import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menbro } from '../../model/Menbro';

/*
  Generated class for the MenbrosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MenbrosProvider {
  menbros: Menbro[] = [];
  constructor(public http: HttpClient) {
    console.log('Hello MenbrosProvider Provider');
  }



  get(){
    this.menbros = [];
    this.http.get('http://192.168.56.1:3000/menbros').
    toPromise().then((dados: any[]) =>{      
     
    dados.forEach((dado) => {
        console.log(dado.id_menbro);
        this.menbros.push({
          id: dado.id_menbro,
          id_discipulador: dado.id_discipulador,
          nome: dado.nome,
          rg: dado.rg,
          cpf: dado.cpf,
          email: dado.email,
          celular: dado.celular,
          nascimento: dado.nascimento,
          rua: dado.rua,
          num: dado.num,
          bairro: dado.bairro,
          cidade: dado.cidade,
          estado: dado.estado
        })
      });
    });
    return this.menbros;
  }

  save(menbro: Menbro): Promise<any> {
    console.log(menbro);
    return this.http.post('http://192.168.56.1:3000/menbro/', menbro, {
      headers: { 'Content-Type': 'application/json' }
    }).toPromise().then(data => {


      // this.toast.show('dados salvos','500','center').subscribe();
    }).catch((err) => {
      console.log(err);
    })
  }

  update(menbro: Menbro): Promise<any> {
    console.log(menbro);
    return this.http.put('http://192.168.56.1:3000/menbro/', menbro, {
      headers: { 'Content-Type': 'application/json' }
    }).toPromise().then(data => {
      
    }).catch((err) => {
      console.log(err);
    })
  }

}
