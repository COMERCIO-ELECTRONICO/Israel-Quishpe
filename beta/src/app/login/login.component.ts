import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';

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
  ) {}

  ngOnInit(): void {}


  seteoValorSeleccionado(eventoSeleecionado){
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



  ingresar() {
    console.log(this.valorAutocomplete);
    if (this.pass === '1234') {
      alert(this.email);
      if (this.valorSeleecionado === 'cliente') {
        alert('BIENVENIDO CLIENTE');



        this._router.navigate(
            ['cliente','producto']
            )
      }
    } else {
      alert('no ingreso');
    }
  }
}
