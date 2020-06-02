import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/Router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  constructor(
    private readonly _activatedRoute: ActivatedRoute
    ) {} //public  ruta: ActivatedRoute
  nombre1 = '';
  nombre2 = '';
  apellido1 = '';
  apellido2 = '';
  email = '';
  telefono = '';
  pass = '';
  confimarPassword = '';

  ngOnInit(): void {
    this._activatedRoute
    .params
    .subscribe((resultadoParametros) => {
      console.log(resultadoParametros);
    });
  }

  crearOEditar() {
    if (this.pass === this.confimarPassword) {
      alert('Contraseñas validas');
    } else {
      alert('Contraseñas no validas');
    }
  }
}
