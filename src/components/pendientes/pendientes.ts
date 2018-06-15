import { Component } from '@angular/core';

/**
 * Generated class for the PendientesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pendientes',
  templateUrl: 'pendientes.html'
})
export class PendientesComponent {

  text: string;

  constructor() {
    console.log('Hello PendientesComponent Component');
    this.text = 'Hello World';
  }

}
