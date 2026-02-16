import { Routes } from '@angular/router';
import { Formulario } from './formulario/formulario';
import { Error } from './error/error'
import { ListadoProductos } from './listado-productos/listado-productos';
import { Login } from './login/login';

export const routes: Routes = [
    {path: '', component: ListadoProductos},
    {path: 'listado', component: ListadoProductos},
    {path: 'agregar', component: Formulario},
    {path: 'editar/:llave', component: Formulario},
    {path: 'login', component: Login},
    // Ruta comodin para las no registradas
    {path: '**', component: Error}

];
