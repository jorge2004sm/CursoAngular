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

  agregarProducto(producto: ProductoModel) {
    this.productos.push(producto)
  }


  getProductoById(id: number): ProductoModel | undefined{
    return this.productos.find(producto => producto.id === id);
  }

}
