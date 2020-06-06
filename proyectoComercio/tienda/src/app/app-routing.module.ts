import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CelularesListComponent } from './components/celulares-list/celulares-list.component';
import { CelularesFormComponent } from './components/celulares-form/celulares-form.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home/login',
    component: LoginComponent
  },
  {
    path: 'usuarios',
    component: UsuarioListComponent
  },
  {
    path: 'usuarios/agregar',
    component: UsuarioFormComponent
  },
  {
    path: 'usuarios/editar/:id',
    component: UsuarioFormComponent
  },
  /*{
    path: '',
    redirectTo: '/celulares',
    pathMatch: 'full'
  },*/
  {
    path: 'home/admin/celulares',
    component: CelularesListComponent
  },
  {
    path: 'celulares/agregar',
    component: CelularesFormComponent
  },
  {
    path: 'celulares/editar/:id',
    component: CelularesFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
