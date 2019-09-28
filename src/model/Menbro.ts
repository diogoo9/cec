
export class Menbro {

    public constructor(
        public id?: number,
        public id_discipulador: number = 0,
        public id_celula: number = 0,
        public nome: string = "",
        public sexo: string = "",
        public cpf: string = "",
        public email: string = "",
        public celular: string = "",
        public nascimento: string = "",
        public rua: string = "",
        public num: string = "",
        public bairro: string = "",
        public cidade: string = "",
        public estado: string = "",
        public tipo_sangue: string = "",
        public senha: string = ""
        ) {

    }

}