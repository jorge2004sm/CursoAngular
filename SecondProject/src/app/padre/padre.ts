import { Component, ViewChild } from '@angular/core';
import { Hijo } from './hijo/hijo';

@Component({
  selector: 'app-padre',
  imports: [Hijo],
  templateUrl: './padre.html',
  styleUrl: './padre.css',
})
export class Padre {

  @ViewChild(Hijo) componenteHijo!: Hijo;

  cambiarMensajeHijo(){
    this.componenteHijo.cambiarMensaje('Mensaje Actualizado desde el componente padre')
  }

}
