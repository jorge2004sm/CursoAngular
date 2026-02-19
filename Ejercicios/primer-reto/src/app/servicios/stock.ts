import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Stock {
  /// EJERCICIO USANDO API--------------------------------
  // private _stock = signal(10)
  // private _nombre = signal('Zapatillas')

  // stockActual = this._stock.asReadonly()

  // nombreProducto = this._nombre.asReadonly()

  // constructor(){

  // }

  // actualizarStock(valor: number){
  //   const nuevoValor = this._stock() + valor
  //   if(nuevoValor >= 0){
  //     this._stock.set(nuevoValor)
  //   }
  // }

  // actualizarNombre(nuevoNombre: string){
  //   if(nuevoNombre.trim()  !== ''){
  //     this._nombre.set(nuevoNombre)
  //   }
  // }

  // resetear(){
  //   this._stock.set(0)
  // }


  /// USANDO HTTP CLIENT-----------------------------
  private http = inject(HttpClient)
  private _stock = signal(10)
  private _nombre = signal('Cargando...')
  nombreProducto = this._nombre.asReadonly()
  stockActual = this._stock.asReadonly()

  traerProductoDeInternet() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1').subscribe(respuesta => {
      this._nombre.set(respuesta.title)
    })
  }


  actualizarStock(valor: number) {
    const nuevoValor = this._stock() + valor
    if (nuevoValor >= 0) {
      this._stock.set(nuevoValor)
    }
  }

  actualizarNombre(nuevoNombre: string) {
    if (nuevoNombre.trim() !== '') {
      this._nombre.set(nuevoNombre)
    }
  }

  resetear() {
    this._stock.set(0)
  }

}
