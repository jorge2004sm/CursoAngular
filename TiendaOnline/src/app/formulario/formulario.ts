import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ProductoModel } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../producto-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  llaveProducto: string | null = null;
  descripcionInput: string = ''
  precioInput: number | null = null

  constructor(private productoService: ProductoService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    // verificamos si debemos cargar un producto ya existente
    const llave = this.route.snapshot.paramMap.get('llave')
    if (llave) {
      const producto = this.productoService.getProductoByLlave(llave)
      if (producto) {
        //Si encontramos el producto lo cargamos en el formulario
        this.llaveProducto = llave;
        this.descripcionInput = producto.descripcion;
        this.precioInput = producto.precio;
      }
    }
  }

  guardarProducto(evento: Event) {
    evento.preventDefault()

    if (this.descripcionInput.trim() === '' || this.precioInput == null || this.precioInput <= 0) {
      console.log('Debe ingresar una descripcion y precio validos')
      return
    }

    const producto = new ProductoModel(this.descripcionInput, this.precioInput)

    this.productoService.guardarProducto(producto, this.llaveProducto)

    this.limpiarFormulario()

    this.router.navigate(['/'])
  }


  volver() {
    this.router.navigate(['/'])
  }

  eliminarProducto() {
    if (this.llaveProducto !== null) {
      this.productoService.eliminarProducto(this.llaveProducto);
      this.limpiarFormulario()
      this.router.navigate(['/'])
    }
  }

  limpiarFormulario() {
    this.llaveProducto = null;
    this.descripcionInput = ''
    this.precioInput = null
  }
}
