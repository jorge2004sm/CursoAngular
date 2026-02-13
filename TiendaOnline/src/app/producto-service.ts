import { EventEmitter, Injectable } from '@angular/core';
import { ProductoModel } from './producto/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  //Variable para el ID siguiente y unico
  private idSiguiente = 1;

  productos: ProductoModel[] = []

  constructor() {
    this.inicializarProductos();
  }

  inicializarProductos() {
    const producto1 = new ProductoModel(this.idSiguiente++, 'Pantalon', 130.00);
    const producto2 = new ProductoModel(this.idSiguiente++, 'Camisa', 80.00);
    const producto3 = new ProductoModel(this.idSiguiente++, 'Playera', 50.00);

    this.productos.push(producto1, producto2, producto3)

  }

  guardarProducto(producto: ProductoModel) {
    if(producto.id === null){ // Caso agregar producto
      producto.id === this.idSiguiente++;
      this.productos.push(producto)
    } else { // Actualizar producto, si el producto tiene un id lo actualizamos
      const indice = this.productos.findIndex(p => p.id === producto.id)
      if(indice !== -1){
        this.productos[indice] = producto 
      }
    }
  }


  getProductoById(id: number): ProductoModel | undefined{
    return this.productos.find(producto => producto.id === id);
  }

  eliminarProducto(id: number){
    const indice = this.productos.findIndex(producto => producto.id === id);
    if(indice !== -1){
      this.productos.splice(indice, 1);
    }
  }

}
