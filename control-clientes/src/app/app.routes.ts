import { Routes } from '@angular/router';
import { Tablero } from './componentes/tablero/tablero';
import { Login } from './componentes/login/login';
import { EditarCliente } from './componentes/editar-cliente/editar-cliente';
import { NoEncontrado } from './componentes/no-encontrado/no-encontrado';
import { LoginGuardian } from './servicios/login-guardian';

export const routes: Routes = [
    {path: '', component: Tablero, canActivate: [LoginGuardian]}, 
    {path: 'login', component: Login},
    {path: 'cliente/editar/:id', component: EditarCliente, canActivate: [LoginGuardian]},
    {path: '**', component: NoEncontrado}
];
