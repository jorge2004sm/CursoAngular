import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-if',
  imports: [],
  templateUrl: './componente-if.html',
  styleUrl: './componente-if.css',
})
export class ComponenteIf {
  isAutenticado = false;

  alternarAutenticacion(): void{
    this.isAutenticado = !this.isAutenticado;
  }
}
