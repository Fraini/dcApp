import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos-services';
import { Lista } from '../../app/clases';
import { DetalleComponent } from '../detalle/detalle.component';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'app-terminados',
    templateUrl: 'terminados.component.html'
})
export class TerminadosComponent implements OnInit {
    constructor(
        private _listaDeseos : ListaDeseosService,
        private navCtrl : NavController
    ) { }

    ngOnInit(): void { }
    
    
    verDetalle(lista :Lista,idx : Number){
        console.log(idx);
        this.navCtrl.push(DetalleComponent,{
            lista, //Eston con el ECMA Scrip 6, no hace falta psarle el tipo, ya lo conoce
            idx
        });
    }
}

