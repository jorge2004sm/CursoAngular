import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MigracionService } from './services/migracion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private migracionService = inject(MigracionService)

  clientesMigrados = this.migracionService.clientes


  alClicarMigrar(){
    this.migracionService.ejecutarMigracion()
  }
}
