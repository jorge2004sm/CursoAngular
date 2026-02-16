import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Formulario } from '../formulario/formulario';
import { ProductoService } from '../producto-service';
import { Producto } from '../producto/producto';
import { ProductoModel } from '../producto/producto.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [Producto, FormsModule, Formulario],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css'
})
export class ListadoProductos {

  productos: { [llave: string]: ProductoModel } = {};
  productosSubscripcion: Subscription | null = null;

  constructor(private productoService: ProductoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cargarProductos();

    // Escuchamos los cambios en la lista de productos
    this.productosSubscripcion = this.productoService.productosActualizados.subscribe((productos) => {
      this.productos = productos;
    })
  }

  cargarProductos() {
    this.productoService.listarProductos().subscribe((productos: { [llave: string]: ProductoModel }) =>{
      this.productos = productos
    }
    );
  }

  obtenerLlaves(): string[] {
    if (this.productos) {
      return Object.keys(this.productos);
    }
    return [];
  }

  agregarProducto() {
    this.router.navigate(['agregar']);
  }

  ngOnDestroy(): void{
    if(this.productosSubscripcion != null){
      this.productosSubscripcion.unsubscribe()
    }
  }

}
