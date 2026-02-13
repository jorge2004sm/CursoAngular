import { Component } from '@angular/core';
import { Producto } from '../producto/producto';
import { ProductoModel } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { Formulario } from '../formulario/formulario';
import { ProductoService } from '../producto-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-productos',
  imports: [Producto, FormsModule, Formulario],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css',
})
export class ListadoProductos {
  productos: ProductoModel[] = [];

  constructor(private productoService: ProductoService, private router: Router){
    
  }

  agregarProducto(){
    this.router.navigate(['agregar'])
  }
}
