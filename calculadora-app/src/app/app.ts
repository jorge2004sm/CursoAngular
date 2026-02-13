import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Formulario } from './formulario/formulario';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Formulario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 title = 'Calculadora';

 resultado: number = 0
 procesarResultado(resultadoHijo: number){
  this.resultado = resultadoHijo;
 }
}
