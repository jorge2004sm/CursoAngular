import { Routes } from '@angular/router';
import { ListadoUsuarios } from './listado-usuarios/listado-usuarios';
import { MostrarMensaje } from './mostrar-mensaje/mostrar-mensaje';
import { Component } from '@angular/core';
import { Padre } from './padre/padre';
import { Hijo } from './padre/hijo/hijo';

export const routes: Routes = [
    {path: '', component: ListadoUsuarios},
    {path: 'mostrar-mensaje', component: MostrarMensaje},
    {
        path: 'configuracion', children: [
            {path: 'padre', component: Padre},
            {path: 'hijo', component: Hijo}
        ]
    }
];


