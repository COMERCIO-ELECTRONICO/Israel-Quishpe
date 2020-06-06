import { Component, OnInit, HostBinding } from '@angular/core';

import { UsuariosService } from '../../services/usuarios.service'
import { Usuario } from 'src/app/models/usuarios';
import { identifierModuleUrl } from '@angular/compiler';
import { strict } from 'assert';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  usuarios: any = [];

  constructor(private celularesService: UsuariosService) { }

  ngOnInit() {
    this.getUsuarios();
    }

    getUsuarios() {
      this.celularesService.getUsuario().subscribe(
        res => {
          this.usuarios = res;
        },
        err => console.error(err)
      );
    }

    deleteUsuarios(id: string) {
      this.celularesService.deleteUsuario(id).subscribe(
        res => {
          console.log(res);
          this.getUsuarios();
        },
        err => console.log(err)
      )
    }
  }