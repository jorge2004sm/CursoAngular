import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../usuarios';

@Component({
  selector: 'app-listado-usuarios',
  imports: [],
  templateUrl: './listado-usuarios.html',
  styleUrl: './listado-usuarios.css',
})
export class ListadoUsuarios implements OnInit {
  usuarios: any[] =  [];

  constructor(private usuariosServices: Usuarios){
    
  }

  ngOnInit(){
    this.usuariosServices.obtenerDatos().subscribe((data)=>{
      this.usuarios = data;
    })
  }
}
