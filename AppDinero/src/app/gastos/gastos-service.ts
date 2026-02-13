import { Injectable, Input } from '@angular/core';
import { Gasto } from './gasto.model';

@Injectable({
  providedIn: 'root',
})
export class GastosService {

  gastos: Gasto[] = [
    new Gasto('Compra casa', 1000),
    new Gasto('Compra comida', 40)
  ]

  eliminar(gasto: Gasto){
    const indice = this.gastos.indexOf(gasto);
    this.gastos.splice(indice, 1)
  }

  

}
