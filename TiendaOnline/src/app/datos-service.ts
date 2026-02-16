import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoModel } from './producto/producto.model';
import { loginService } from './login';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  url = 'https://tienda-online-9631d-default-rtdb.firebaseio.com/'

  constructor(private httpClient: HttpClient, private loginService: loginService) {

  }

  listarProductos(): Observable<{ [llave: string]: ProductoModel }> {
    const token = this.loginService.getIdToken()
    const url_listar = `${this.url}datos.json?auth=${token}`
    return this.httpClient.get<{ [llave: string]: ProductoModel }>(this.url + 'datos.json?auth=' + token)
  }

  agregarProducto(producto: ProductoModel): Observable<any> {
    const token = this.loginService.getIdToken()
    const url_agregar = `${this.url}datos.json?auth=${token}`
    return this.httpClient.post(url_agregar, producto)
  }

  modificarProducto(producto: ProductoModel, llave: string): Observable<any> {
    const token = this.loginService.getIdToken()

    const url_modificar = `${this.url}datos/${llave}.json?auth=${token}`;
    return this.httpClient.put(url_modificar, producto)
  }

  eliminarProducto(llave: string): Observable<any> {
        const token = this.loginService.getIdToken()

    const url_eliminar = `${this.url}datos/${llave}.json?auth=${token}`
    return this.httpClient.delete(url_eliminar)
  }
}
