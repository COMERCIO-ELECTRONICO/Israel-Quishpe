import { LoginService } from '../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // credenciales
  email = '';
  pass = '';
  correo = '';
  seleccionadoValor;
  valorAutocomplete = '';
  arregloResultado = [];
  sugerencias = ['kevin', 'cliente', 'orlando'];
  valorSeleecionado;

  constructor(
    private readonly _router: Router,
    private readonly _loginService: LoginService,
  ) { }

  ngOnInit(): void { }

  seteoValorSeleccionado(eventoSeleecionado) {
    console.log(eventoSeleecionado);
    this.valorSeleecionado = eventoSeleecionado;
  }

  buscarSugerencia(evento) {
    console.log(evento.query);
    if (evento.query !== '') {
      const valorEncontrado = this.sugerencias.find((item) => {
        return item === evento.query;
      });
      console.log(valorEncontrado);
      this.arregloResultado.push(valorEncontrado);
      this.sugerencias = this.arregloResultado;
    } else {
      this.sugerencias = ['kevin', 'cliente', 'orlando'];
    }
  }

  /*ingresar() {
    this._loginService.metodoGet('http://localhost:1337/Usuario=?'+this.correo)
    .subscribe((resultaMetodoGet) => {
      console.log(resultadoMetodoGet)
      this.a
    })
  }*/


  /* ingresar() {
     console.log('guardar')
     localStorage
     .setItem(
       'nombre',
       JSON.stringify({nombre: 'Cliente'})
     )
   }
   eliminarRegitroPorId(){
     this._loginService
     .metodoDelete('http://localhost:1337/usuario/1').subscribe(
       (respuestDelete)=>{
         console.log(' repuesta de delete');
         console.log(respuestDelete);
       }
     )
   }*/


  ingresar() {
    this._loginService.metodoGet('http://localhost:1337/Usuario?email=' + this.email + '&clave=' + this.pass)
      .subscribe((respuesta) => {
        console.log(respuesta)
        if (JSON.stringify(respuesta) == '[]') {
          
          alert('usuario o contrase;a incorrectos');
        } else {
          alert('bienvenido');
          this._router.navigate(
            ['/login', 'producto'])
      }})
  }
}

