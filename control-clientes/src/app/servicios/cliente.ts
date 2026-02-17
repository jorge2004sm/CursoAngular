import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../modelo/cliente.modelo';
import { collection, collectionData, Firestore, query } from '@angular/fire/firestore';
import { orderBy } from 'firebase/firestore';


@Injectable({
  providedIn: 'root',
})
export class ClienteService {

  clientes: Observable<Cliente[]>

  constructor(private firestore: Firestore){
    //Realizamos una consulta para obtener el listado de clientes
    const clientesRef = collection(this.firestore, 'clientes')
    const consulta = query(clientesRef, orderBy('nombre', 'asc'))
    this.clientes = collectionData(consulta, {idField: 'id'}) as Observable<Cliente[]>
  }
  

  getClientes(): Observable<Cliente[]>{
    return this.clientes
  }
}
