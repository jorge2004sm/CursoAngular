import { Injectable } from '@angular/core';
import { Ingreso } from './ingreso.model';

@Injectable({
  providedIn: 'root',
})
export class IngresosService {
  ingresos: Ingreso[] = [
      new Ingreso('Sueldo', 1500),
      new Ingreso('Venta coche', 400)
    ]


    eliminar(ingreso: Ingreso){
      const indice: number = this.ingresos.indexOf(ingreso);
      this.ingresos.splice(indice, 1);
    }
}
