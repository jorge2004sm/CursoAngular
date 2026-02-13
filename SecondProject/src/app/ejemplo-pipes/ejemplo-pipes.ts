import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-pipes',
  imports: [CommonModule],
  templateUrl: './ejemplo-pipes.html',
  styleUrl: './ejemplo-pipes.css',
})
export class EjemploPipes {
  empleados = [
    { nombre: 'Ricardo Suarez', sueldo: 12000, fechaNacimiento: new Date('2000-08-01') },
    { nombre: 'Jorge Sanchez', sueldo: 9000, fechaNacimiento: new Date('2040-10-21') },
    { nombre: 'Pedro Rodriguez', sueldo: 19000, fechaNacimiento: new Date('2023-02-11') },

  ]
}
