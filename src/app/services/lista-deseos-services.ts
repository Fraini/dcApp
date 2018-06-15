import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';

@Injectable()
export class ListaDeseosService {
    listas:Lista[] = [];
    constructor(){
        let lista1 = new Lista("Compras supermercado");
        let lista2 = new Lista("Juegos que deseo");
        let lista3 = new Lista("Cosas de la universidad");
        //Rellenamos arreglo de lista
        this.listas.push(lista1);
        this.listas.push(lista2);
        this.listas.push(lista3);
        console.log("Servicio Inicializado!");
    }
}