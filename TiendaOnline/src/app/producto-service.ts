import { EventEmitter, Injectable } from '@angular/core';
import { ProductoModel } from './producto/producto.model';
import { DatosService } from './datos-service';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {

  productos: { [llave: string]: ProductoModel } = {};

  constructor(private datosService: DatosService) {

  }

  listarProductos() {
    return this.datosService.listarProductos()
  }

  guardarProducto(producto: ProductoModel, llave: string | null = null) {
    if(llave === null){
      this.datosService.guardarProducto(producto).subscribe(() => {
        console.log('Se agrego el nuevo producto' + producto.descripcion + producto.precio)
      });
    }
  }


  getProductoByLlave(llave: string): ProductoModel | undefined {
    return undefined
    // return this.productos.find(producto => producto.id === id);
  }

  eliminarProducto(id: number) {
    // const indice = this.productos.findIndex(producto => producto.id === id);
    // if(indice !== -1){
    //   this.productos.splice(indice, 1);
    // }
  }

}
