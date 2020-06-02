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
  valorAutocomplete = '';
  arregloResultado = [];
  sugerencias = ['kevin', 'cachetes', 'orlando'];
  valorSeleecionado;

  constructor(
    private readonly _router: Router,
    private readonly _loginService:LoginService,
  ) {}

  ngOnInit(): void {
    /*this._loginService
      .metodoGet('http://localhost:1337/usuario')
      .subscribe((resultadoMetodoGet) => {
        console.log('Respuest de Get');
        console.log(resultadoMetodoGet);
      });*/

  }
  
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
      this.sugerencias = ['Estudiante', 'Profesor'];
    }}
  ingresar() {
    console.log('guardar')
    localStorage
    .setItem(
      'nombre',
      JSON.stringify({nombre: 'Estudiante'})
    )
    /* 
    this._loginService
  .metodoPost(
    'http://localhost:1337/usuario',
    {
      nombre: "israel",
      edad: this.pass,
      correo: this.email,
      esCasado: true
    }
    )
  .subscribe(
    (resultadoPost)=>{
      console.log('Respuest de Post');
      console.log(resultadoPost);
    }
  )
    if (this.pass === '1234') {
      alert(this.email);
      if (this.valorSeleecionado === 'Estudiante') {
        alert('es estudiante');
        this._router.navigate(
          ['/estudiante', 'perfil']
        )
        // localhost:9000/estudiante/perfil
      }
    } else if
      (this.pass === '3344') {
      alert(this.email);
      if (this.valorSeleecionado === 'Profesor') {
        alert('Es Profesor');
        this._router.navigate(
          ['/profesor', 'perfil']
        )
      }
    } else {
      alert('no ingreso');
    }*/
  } 
    eliminarRegitroPorId(){
      this._loginService
      .metodoDelete('http://localhost:1337/usuario/2').subscribe(
        (respuestDelete)=>{
          console.log(' repuesta de delete');
          console.log(respuestDelete);
        }
      )
    }
  }