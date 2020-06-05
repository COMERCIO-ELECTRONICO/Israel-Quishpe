import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoUserComponent } from './info-user/info-user.component';


const rutas: Routes = [
  {
    path: ':nombre/info',
    component: InfoUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  providers: [],
  exports: [RouterModule],
})

export class UsuarioRoutes{}
