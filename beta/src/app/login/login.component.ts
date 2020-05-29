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
  sugerencias = ['kevin', 'cachetes', 'orlando'];


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
      this.sugerencias = ['kevin', 'cachetes', 'orlando'];
    }
  }



  ingresar() {
    console.log(this.valorAutocomplete);
    if (this.pass === '1234') {
      alert(this.email);
      if (this.valorSeleecionado === 'kevin') {
        alert('es estudiante');



        this._router.navigate(
            ['/estudiante','perfil']
            )
            // localhost:9000/estudiante/perfil
      }
    } else {
      alert('no ingreso');
    }
  }
}
