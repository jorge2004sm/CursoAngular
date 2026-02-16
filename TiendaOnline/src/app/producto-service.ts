import { EventEmitter, Injectable } from '@angular/core';
import { ProductoModel } from './producto/producto.model';
import { DatosService } from './datos-service';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {

  productos: {[llave: string]: ProductoModel} = {};

  constructor(private datosService: DatosService) {
    
  }

  listarProductos(){
    return this.datosService.listarProductos
  }

  guardarProducto(producto: ProductoModel) {
    // if(producto.id === null){ // Caso agregar producto
    //   producto.id === this.idSiguiente++;
    //   this.productos.push(producto)
    // } else { // Actualizar producto, si el producto tiene un id lo actualizamos
    //   const indice = this.productos.findIndex(p => p.id === producto.id)
    //   if(indice !== -1){
    //     this.productos[indice] = producto 
    //   }
    // }
  }


  getProductoByLlave(llave: string): ProductoModel | undefined{
    return undefined
    // return this.productos.find(producto => producto.id === id);
  }

  eliminarProducto(id: number){
    // const indice = this.productos.findIndex(producto => producto.id === id);
    // if(indice !== -1){
    //   this.productos.splice(indice, 1);
    // }
  }

}
