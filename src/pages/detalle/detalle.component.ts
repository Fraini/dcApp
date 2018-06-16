import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ListaItem,Lista } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/services/lista-deseos-services';
import { AlertController } from 'ionic-angular';


@Component({
    selector: 'app-detalle',
    templateUrl: 'detalle.component.html'
})
export class DetalleComponent implements OnInit {
    idx:number;
    lista:Lista;
    constructor(
        public navCtrl: NavController,
        public navParams : NavParams,
        public _listaDeseos: ListaDeseosService,
        public alertCtrl: AlertController
    ) { 
        this.lista = this.navParams.get("lista");
        this.idx = this.navParams.get("idx");

    }

    ngOnInit(): void { }

    actualizar(item : ListaItem){
        item.completado = !item.completado;

        let todosMarcados = true;

        for(let item of this.lista.items){
            if(! item.completado){
                todosMarcados = false;
                break;
            }
        }

        this.lista.terminada = todosMarcados;

        this._listaDeseos.actualizarData();
    }

    borrarItem(){
        this.showConfirm();
    }

    showConfirm() {
        const confirm = this.alertCtrl.create({
          title: this.lista.nombre,
          message: '¿Está seguro que desea borrar la lista?',
          buttons: ['Cancelar',
            {
              text: 'Eliminar',
              handler: () => {
                console.log('Elminar lista');
                this._listaDeseos.eliminarLista(this.idx);
                this.navCtrl.pop();//Regresar al Home
              }
            }
          ]
        });
        confirm.present();
      }
}

