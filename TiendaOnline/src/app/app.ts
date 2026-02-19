import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ListadoProductos } from './listado-productos/listado-productos';
import { loginService } from './login';

@Component({
  selector: 'app-root',
  imports: [ListadoProductos, RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  titulo = 'Tienda Online';

  constructor(private loginService: loginService){

  }
  isAutenticado() {
    return this.loginService.isAutenticado() 
  }

  salir(){
    this.loginService.logout()
  }
}
