import { Component } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresosService } from './ingresos-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ingresos',
  imports: [CommonModule],
  templateUrl: './ingresos.html',
  styleUrl: './ingresos.css',
})
export class Ingresos {
  ingresos: Ingreso[] = [];

  constructor(private ingresoService: IngresosService){
    this.ingresos = this.ingresoService.ingresos;
  }

  eliminarIngreso(ingreso: Ingreso){
    this.ingresoService.eliminar(ingreso);
  }

}
