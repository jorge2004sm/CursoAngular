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

    private transformarDatos(viejo: ClienteLegacy): Cliente {
    // Si los campos legacy no existen (porque la API de pruebas tiene otros nombres),
    // usamos campos de la API real o valores por defecto.
    const apiReal = viejo as any; 

    return {
        // Si cod_usr no existe, intentamos usar 'id' de la API real
        id: Number(viejo.id) || apiReal.id || 0,
        
        // Si nom_completo no existe, usamos 'name' de la API real
        nombre: viejo.name || apiReal.name || 'Desconocido',
        
        apellido: viejo.username || apiReal.username || 'Desconocido',
        
        // Si last_login_unix es NaN o undefined, usamos la fecha actual
        telefono: viejo.phone || apiReal.phone 
    };
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