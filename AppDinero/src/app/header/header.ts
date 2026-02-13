import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Input() presupuestoTotal!: number;
  @Input() ingresoTotal!: number;
  @Input() gastoTotal!: number;
  @Input() porcentajeTotal!: number;


}
