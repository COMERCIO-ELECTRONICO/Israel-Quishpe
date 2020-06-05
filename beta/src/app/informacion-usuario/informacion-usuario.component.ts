import { EditarService } from './../services/editarUsuario.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion-usuario',
  templateUrl: './informacion-usuario.component.html',
  styleUrls: ['./informacion-usuario.component.css']
})
export class InformacionUsuarioComponent implements OnInit {

  constructor(

    private readonly _activatedRoute: ActivatedRoute,
    private readonly _editarService: EditarService
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
      //this.telefono =this._activatedRoute.snapshot.paramMap.get('id')
  }

  crear() {
    if (this.pass === this.confimarPassword) {
      alert('Contraseñas validas');
    } else {
      alert('Contraseñas no validas');
    }
  }

  ingresar() {
    this._editarService.editarCredenciales({
      nombre: this.nombre,
	tipo_documento: this.tipo_documento,
	num_documento: this.num_documento,
	direccion: this.direccion,
	telefono: this.telefono,
	email: this.email,
  clave: this.confimarPassword
  
    }).subscribe(
      (registroCreado)=>{
        console.log('registroCreado');
        console.log(registroCreado);
        alert(registroCreado);
      }
    )
  
  }
  editar(){
    this._editarService.metodoPut('http://localhost:1337/usuario?idusu=',{// aqui va el id 
    nombre: this.nombre,
    tipo_documento: this.tipo_documento,
    num_documento: this.num_documento,
    direccion: this.direccion,
    telefono: this.telefono,
    email: this.email,
    clave: this.confimarPassword
    }).subscribe(
      (registroActualizado)=>{
        console.log('registroActualizado');
        console.log(registroActualizado);
        alert('Registro actualizado con exito')
      }
    )


}
  
}
