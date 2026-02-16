import { EventEmitter, Injectable } from '@angular/core';
import { ProductoModel } from './producto/producto.model';
import { DatosService } from './datos-service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {

  productos: { [llave: string]: ProductoModel } = {};
  // Observable para notificar cambios
  productosActualizados = new Subject<{ [llave: string]: ProductoModel }>();

  constructor(private datosService: DatosService) {

  }

  listarProductos() {
    return this.datosService.listarProductos()
  }

  guardarProducto(producto: ProductoModel, llave: string | null = null) {
    if(llave === null){
      this.datosService.agregarProducto(producto).subscribe(() => {
        this.refrescarProductos()
      });
    } else{
      this.datosService.modificarProducto(producto, llave).subscribe(() => {
        this.refrescarProductos()
      });
    }
  }


  private refrescarProductos( ){
    this.listarProductos().subscribe((productos: { [llave: string]: ProductoModel }) => {
      this.setProductos(productos);
    })
  }


  setProductos(productos: { [llave: string]: ProductoModel }){
    this.productos = productos;
    this.productosActualizados.next(this.productos); //Emite la actualizacion de la lista
  }


  getProductoByLlave(llave: string): ProductoModel | undefined {
    return this.productos[llave]
    // return this.productos.find(producto => producto.id === id);
  }

  eliminarProducto(id: number) {
    // const indice = this.productos.findIndex(producto => producto.id === id);
    // if(indice !== -1){
    //   this.productos.splice(indice, 1);
    // }
  }

}
