import { Component, Input } from '@angular/core';
import { Gasto } from './gasto.model';
import { GastosService } from './gastos-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gastos',
  imports: [CommonModule],
  templateUrl: './gastos.html',
  styleUrl: './gastos.css',
})
export class Gastos {
  gastos: Gasto[] = [];

  @Input() ingresoTotal!: number;

  constructor(private gastoService: GastosService){
    this.gastos = this.gastoService.gastos
  }

  eliminarGasto(gasto: Gasto) {
    this.gastoService.eliminar(gasto)
  }

  calcularPorcentaje(gasto: Gasto){
    return ((gasto.valor* 1000)/this.ingresoTotal);
  }


}
