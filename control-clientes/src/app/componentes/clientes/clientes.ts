import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { Cliente } from '../../modelo/cliente.modelo';
import { ClienteService } from '../../servicios/cliente-service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule, NgForm} from '@angular/forms'

@Component({
  selector: 'app-clientes',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes {
  clientes: Cliente[] | null = null

  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: undefined
  }

  @ViewChild('botonCerrar') botonCerrar!: ElementRef
  
  constructor(private clienteServicio: ClienteService, private ngZone: NgZone){

  }

  // ngOnInit(){
  //   this.clienteServicio.getClientes().subscribe(clientes => {
  //     this.clientes = clientes
  //   })
  // }


  ngOnInit() {
    this.clienteServicio.getClientes().subscribe(clientes => {
      this.ngZone.run(() => {        // 👈 envolver la asignación
        this.clientes = clientes;
      });
    });
  }

  getSaldoTotal(): number{
    return this.clientes?.reduce((total, cliente) => total + (cliente.saldo ?? 0), 0) ?? 0
  }

  agregar(clienteForm: NgForm){
    const {value, valid} = clienteForm


    // Si el formulario es valido añadimos la logica para guardar el cliente y limpiamos el form
    if(valid){
      this.clienteServicio.agregarCliente(value)
      clienteForm.resetForm()
      this.cerrarModal()
    }
  } 


  private cerrarModal(){
    this.botonCerrar.nativeElement.click()
  }
}
