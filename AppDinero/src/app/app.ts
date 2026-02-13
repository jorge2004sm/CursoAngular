import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Ingresos } from './ingresos/ingresos';
import { Gastos } from './gastos/gastos';
import { Formulario } from './formulario/formulario';
import { Ingreso } from './ingresos/ingreso.model';
import { Gasto } from './gastos/gasto.model';
import { IngresosService } from './ingresos/ingresos-service';
import { GastosService } from './gastos/gastos-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Ingresos, Gastos, Formulario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  ingresos: Ingreso[] = []
  gastos: Gasto[] = []

  constructor(private ingresoService: IngresosService, private gastoService: GastosService){
    this.ingresos = this.ingresoService.ingresos;
    this.gastos = this.gastoService.gastos;
  }

  getIngresoTotal(){
    let ingresoTotal: number = 0;
    this.ingresos.forEach(ingreso =>{
      ingresoTotal += ingreso.valor
    });
    return ingresoTotal
  }

   getGastoTotal(){
    let gastoTotal: number = 0;
    this.gastos.forEach(gasto =>{
      gastoTotal += gasto.valor
    });
    return gastoTotal
  }
  
  getPorcentajeTotal(){
    const ingresoTotal = this.getIngresoTotal();
    if (ingresoTotal === 0) return 0;
    return ((this.getGastoTotal() * 1000)) / ingresoTotal;
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getGastoTotal();
  }
}
