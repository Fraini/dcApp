import { Component, OnInit } from '@angular/core';
import { Lista,ListaItem } from '../../app/clases/index';
import { AlertController, NavController} from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos-services';


@Component({
    selector: 'app-agregar',
    templateUrl: 'agregar.component.html'
})
export class AgregarComponent implements OnInit {
    nombreLista:string = "";
    nombreItem:string = "";
    items:ListaItem[] = [];
    constructor(
        public alertCtrl : AlertController,
        public navCtrl: NavController,
        public _listaDeseos : ListaDeseosService
    ) { }

    ngOnInit(): void { }

    agregar(){
        if(this.nombreItem.length == 0)
            return;
        let item = new ListaItem();
        item.nombre = this.nombreItem;
        this.items.push(item);
        this.nombreItem = "";
    }

    elimimarItem(index : number){
        console.log(index);
        this.items.splice(index,1);
    }

    mostrarTarjeta():boolean{
        return this.items !== undefined &&  this.items.length > 0 ? true : false;
    }

    guardarLista(){
        if(this.nombreLista.length == 0)
            this.showAlert();
        let lista = new Lista(this.nombreLista);
        lista.items = this.items;
        //this._listaDeseos.listas.push(lista);
        this._listaDeseos.agregarLista(lista);
        this.navCtrl.pop();
    }

    showAlert() {
        const alert = this.alertCtrl.create({
          title: 'Nombre de la lista!',
          subTitle: 'El nombre de la lista es necesario!',
          buttons: ['OK']
        });
        alert.present();
    }    
}
