import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IngresosService } from '../ingresos/ingresos-service';
import { GastosService } from '../gastos/gastos-service';
import { Ingreso } from '../ingresos/ingreso.model';
import { Gasto } from '../gastos/gasto.model';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  tipo: string="ingresoOperacion"

  descripcionInput: string | null = null
  precioInput: number | null = null

  constructor(private ingresoServicio: IngresosService, private gastoService: GastosService){

  }

  tipoOperacion(evento: Event){
    const target = evento.target as HTMLSelectElement
    this.tipo = target.value;
  }

  agregarValor(){
    if(this.descripcionInput != null && this.precioInput != null){
      if(this.tipo === 'ingresoOperacion'){
        this.ingresoServicio.ingresos.push(
          new Ingreso(this.descripcionInput, this.precioInput)
        )
      } else {
        this.gastoService.gastos.push(
          new Gasto(this.descripcionInput, this.precioInput)
        )
      }
    } else {
      console.log('Introduce elementos validos')
    }
    this.descripcionInput = null
    this.precioInput = null
  }
}
