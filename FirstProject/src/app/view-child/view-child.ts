import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  imports: [],
  templateUrl: './view-child.html',
  styleUrls: ['./view-child.css'],
})
export class ViewChildComponent {
  @ViewChild('referenciaInput') inputElemento!: ElementRef<HTMLInputElement>; 


  cambiarTexto(){
    this.inputElemento.nativeElement.value = 'Texto cambiado'
  }
}
export { ViewChild };

