import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Stock } from '../servicios/stock';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {

  // @Input() cantidad: number = 0
  @Input() nombreProducto: string = ''


  @Output() avisoCritico = new EventEmitter<string>()

  // ---------------- CON SERVICIO
  private stockService = inject(Stock)

  cantidad = this.stockService.stockActual

  nombre = this.stockService.nombreProducto


  comprobarEstado() {
    if (this.cantidad() <= 0) {
      this.avisoCritico.emit('NO HAY MAS UNIDADES')
    }
  }

  // -------- CON SERVICIO

}
