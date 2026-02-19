import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Resultado } from './resultado/resultado';
import { Hijo } from './hijo/hijo';
import { Stock } from './servicios/stock';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, Resultado, Hijo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 titulo = 'Primer Reto';

 totalCuenta: number = 0
 resultadoPropina: number = 0
 porcentaje: number = 0
 opcionesPropina = [10, 15, 20, 25, 30];


 producto = 'Zapatillas'
 stockActual = 10
 
 mensajeAlerta: string = ''

 nombreProducto = ''

 pruebaPadre = 'Juan'


 // CON SERVICIOS-----------------------

 private stockService = inject(Stock)

 stock = this.stockService.stockActual

 ///-----------------------------------------


 calcular(){
  this.resultadoPropina = this.totalCuenta * (this.porcentaje / 100)
  
 }

 cambiarStock(valor: number){
  if(this.stockActual + valor >= 0){
    this.stockActual += valor
  }

  if(this.stockActual <= 0){
    this.manejarAviso('STOCK AGOTADO')
  }
 }


 limpiar(){
    this.resultadoPropina = 0
    this.totalCuenta = 0
    this.porcentaje = 0 
  }

  // cambiarNombre(){
  //   this.stockService.actualizarNombre(this.nombreProducto)
  // }

  manejarAviso(mensaje: string){
    this.mensajeAlerta = mensaje
    alert(mensaje)
  }




  //---------------------------------------- CON SERVICIOS -----------------------------------------

  actualizarStock(valor: number){
    this.stockService.actualizarStock(valor)
  }

  cambiarNombre(){
    this.stockService.actualizarNombre(this.nombreProducto)
  }


  // ------------------------- HTTP CLIENT ----------------------------
  descargarDatos(){
    this.stockService.traerProductoDeInternet()
  }
}
