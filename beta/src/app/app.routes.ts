//import { ProductoComponent } from './producto/producto.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/Router';
import { HomeComponent } from './home/home.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { LoginComponent } from './login/login.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';

const rutas: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: ':home/iniciar-sesion',
    component: IniciarSesionComponent,
  },
  {
    path: 'estudiante/perfil',
    component: PerfilUsuarioComponent,
  },
 {
    path: 'home/registrarse',
    component: RegistrarseComponent,
  },

  {
    path: 'usuario',
    loadChildren: () =>
      import('./usuario/usuario.module')
      .then(mod => mod.UsuarioModule),
  },
  /*{
    path: 'producto',
    loadChildren: () =>
      import('./producto/producto.module')
      .then(mod => mod.ProductoModule),
  },*/
  {
    path: 'home/login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NoEncontradoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  providers: [],
  exports: [RouterModule],
})
export class AppRoutes {}
