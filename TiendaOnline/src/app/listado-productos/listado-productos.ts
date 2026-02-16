import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Formulario } from '../formulario/formulario';
import { ProductoService } from '../producto-service';
import { Producto } from '../producto/producto';
import { ProductoModel } from '../producto/producto.model';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [Producto, FormsModule, Formulario],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {

  productos: {[llave:string]: ProductoModel} = {};

  constructor(private productoService: ProductoService,
    private router: Router
  ){}

  ngOnInit(){
   this.cargarProductos();
  }

  cargarProductos(){
    this.productoService.listarProductos().subscribe((productos: {[llave:string]: ProductoModel}) => {
      this.productos = productos;
    });
  }

  obtenerLlaves(): string[]{
    if(this.productos){
      return Object.keys(this.productos);
    }
    return [];
  }

  agregarProducto(){
    this.router.navigate(['agregar']);
  }

}
