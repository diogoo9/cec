export class Chamada{

   public   id:number
   public  dsc:String
   public data:String
   public id_celula:number
   public freq?:{id_membro?: number, present?: boolean, nome?:String }[] 
   public faults?: number
   public presents?: number
   public total?:number

}