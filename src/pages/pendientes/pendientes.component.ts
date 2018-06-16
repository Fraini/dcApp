import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos-services';
import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import { Lista } from '../../app/clases';
import { DetalleComponent } from '../detalle/detalle.component';


@Component({
    selector: 'app-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientesComponent implements OnInit {
    constructor( private _listaDeseos : ListaDeseosService,
                 private navCtrl : NavController ) { }

    ngOnInit(): void { }
    
    irAgregar(){
        this.navCtrl.push(AgregarComponent);
    }

    verDetalle(lista :Lista,idx : Number){
        console.log(idx);
        this.navCtrl.push(DetalleComponent,{
            lista, //Eston con el ECMA Scrip 6, no hace falta psarle el tipo, ya lo conoce
            idx
        });
    }

}
