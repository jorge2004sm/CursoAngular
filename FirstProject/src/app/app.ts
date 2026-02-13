import { Component, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoProductos } from './listado-productos/listado-productos';
import { ComponenteIf } from './componente-if/componente-if';
import { AgregarTarea } from './agregar-tarea/agregar-tarea';
import { ComponenteFor } from './componente-for/componente-for';
import { Padre } from './padre/padre';
import { ViewChildComponent } from './view-child/view-child';
import { Mensaje } from './mensaje';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ViewChildComponent, Padre],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 titulo = 'Servicios en Angular';

 mensaje: string;

 constructor(mensajeService: Mensaje){
  this.mensaje = mensajeService.obtenerMensaje();
 }
}
