import { EditarService } from './services/editarUsuario.service';
import { IngresarProductoService } from './services/ingresarProducto.service';
import { RegistrarseService } from './services/registrarse.service';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { LoginComponent } from './login/login.component';
import { AppRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { UsuarioModule } from './usuario/usuario.module';
import { CommonModule } from '@angular/common';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { ProductoComponent } from './producto/producto.component';
import { IngresarProcutoComponent } from './ingresar-procuto/ingresar-procuto.component';
import { InformacionUsuarioComponent } from './informacion-usuario/informacion-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoEncontradoComponent,
    IniciarSesionComponent,
    LoginComponent,
    PerfilUsuarioComponent,
    RegistrarseComponent,
    ProductoComponent,
    IngresarProcutoComponent,
    InformacionUsuarioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    BrowserAnimationsModule,
    ButtonModule,
    MatInputModule,
    FormsModule,
    AutoCompleteModule,
    UsuarioModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    RegistrarseService,
    IngresarProductoService,
    EditarService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
