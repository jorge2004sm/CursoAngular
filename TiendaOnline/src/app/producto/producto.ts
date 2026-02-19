import { Component, Input } from '@angular/core';
import { ProductoModel } from './producto.model';
import { ProductoService } from '../producto-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto',
  imports: [CommonModule],
  templateUrl: './producto.html',
  styleUrl: './producto.css',
})
export class Producto {

  @Input() producto!: ProductoModel;
  @Input() llave!: string; 


  constructor(private router: Router) {
  }

  editarProducto() {
    // Pasamos el ID  en la url
    this.router.navigate(['/editar', this.llave])
  }

}
