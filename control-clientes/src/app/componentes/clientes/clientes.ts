import { Component } from '@angular/core';
import { Cliente } from '../../modelo/cliente.modelo';
import { ClienteService } from '../../servicios/cliente';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes',
  imports: [CommonModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes {
  clientes: Cliente[] | null = null
  
  constructor(private clienteServicio: ClienteService){

  }

  ngOnInit(){
    this.clienteServicio.getClientes().subscribe(clientes => {
      this.clientes = clientes
    })
  }
}
