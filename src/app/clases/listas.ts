import { ListaItem  } from './lista-item';

export class Lista{
    nombre : string;
    terminada : boolean;
    items : ListaItem[]; //Arreglo de tipo lista

    constructor(nombre:string){
        this.nombre = nombre;
        this.terminada = false;
    }
}