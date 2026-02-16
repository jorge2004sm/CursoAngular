import { Routes } from '@angular/router';
import { Formulario } from './formulario/formulario';
import { Error } from './error/error'
import { ListadoProductos } from './listado-productos/listado-productos';
import { Login } from './login/login';
import { LoginGuardian } from './login-guardian';

export const routes: Routes = [
    {path: '', component: ListadoProductos, canActivate: [LoginGuardian]},
    {path: 'listado', component: ListadoProductos, canActivate: [LoginGuardian]},
    {path: 'agregar', component: Formulario, canActivate: [LoginGuardian]},
    {path: 'editar/:llave', component: Formulario, canActivate: [LoginGuardian]},
    {path: 'login', component: Login},
    // Ruta comodin para las no registradas
    {path: '**', component: Error}

];
