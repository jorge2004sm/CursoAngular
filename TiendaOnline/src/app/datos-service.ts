import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoModel } from './producto/producto.model';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  url = 'https://tienda-online-9631d-default-rtdb.firebaseio.com/'

  constructor(private httpClient: HttpClient){
    
  }

  listarProductos(): Observable<{[llave: string]: ProductoModel}>{
    return this.httpClient.get<{[llave: string]: ProductoModel}>(this.url + 'datos.json')
  }

  guardarProducto(producto: ProductoModel): Observable<any>{
    return this.httpClient.post(`${this.url}datos.json`, producto)
  }
}
