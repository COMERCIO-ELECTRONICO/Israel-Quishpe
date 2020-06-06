import { RegistrarseService } from './../services/registrarse.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _registroService: RegistrarseService
  ) { } //public  ruta: ActivatedRoute
  nombre = '';
  tipo_documento = '';
  num_documento = '';
  direccion = '';
  telefono = '';
  email = '';
  pass = '';
  confimarPassword = '';

  ngOnInit(): void {
    this._activatedRoute
      .params
      .subscribe((resultadoParametros) => {
        console.log(resultadoParametros);
      });
  }

  crear() {
    if (this.pass === this.confimarPassword) {
      alert('Contraseñas validas');
    } else {
      alert('Contraseñas no validas');
    }
  }

  ingresar() {
    this._registroService.crearCredenciales({
      nombre: this.nombre,
      tipo_documento: this.tipo_documento,
      num_documento: this.num_documento,
      direccion: this.direccion,
      telefono: this.telefono,
      email: this.email,
      clave: this.confimarPassword

    }).subscribe(
      (registroCreado) => {
        console.log('registroCreado');
        console.log(registroCreado);
        
        alert(registroCreado);
      }
    )
    this._registroService.metodoGet('http://localhost:1337/usuario?num_documento='+this.num_documento)
    .subscribe((traerDatos)=>{
      //this._router.navigate(['/informacion-cliente'+traerDatos[0]['id']])
      console.log(traerDatos["id"])
    })
  }
}
