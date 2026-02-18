import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente, ClienteLegacy } from '../interfaces/cliente.interface';


@Injectable({
  providedIn: 'root' // <--- Esto es lo que le dice a Angular: "Úsame en toda la app"
})

export class MigracionService{
    private http = inject(HttpClient)

    private _clientes = signal<Cliente[]>([])
    public clientes = this._clientes.asReadonly()

    private transformarDatos(viejo: ClienteLegacy): Cliente{
        return{
            id: Number(viejo.cod_usr),
            nombre: viejo.nom_completo,
            activo: viejo.is_active === 1,
            ultimaConexion: new Date(viejo.last_login_unix * 1000)

        }
    }

    ejecutarMigracion(){
        const urlLegacy = 'https://jsonplaceholder.typicode.com/users'
        this.http.get<ClienteLegacy[]>(urlLegacy).subscribe({
            next: (datosSucios) => {
                const datosLimpios = datosSucios.map(item => this.transformarDatos(item))
                this._clientes.set(datosLimpios)
            },
            error: (err) => console.error('Fallo en la migracion', err)
        })
    }
}