import { Component } from '@angular/core';
import { Padre } from '../padre';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {
  mensaje: string = 'Mensaje desde el componente hijo'

  cambiarMensaje(nuevoMensaje: string){
    this.mensaje = nuevoMensaje
  }



}
