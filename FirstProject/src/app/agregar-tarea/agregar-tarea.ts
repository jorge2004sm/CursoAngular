import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar-tarea',
  imports: [],
  templateUrl: './agregar-tarea.html',
  styleUrl: './agregar-tarea.css',
})
export class AgregarTarea {
  tarea: string = ''

  agregarTarea(nuevaTarea: string): void{
    this.tarea = nuevaTarea
  }
}
