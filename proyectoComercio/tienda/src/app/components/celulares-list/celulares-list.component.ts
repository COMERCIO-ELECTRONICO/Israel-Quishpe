import { Component, OnInit, HostBinding } from '@angular/core';

import { CelularesService } from '../../services/celulares.service'
import { Celular } from 'src/app/models/celulares';
import { identifierModuleUrl } from '@angular/compiler';
import { strict } from 'assert';

@Component({
  selector: 'app-celulares-list',
  templateUrl: './celulares-list.component.html',
  styleUrls: ['./celulares-list.component.css']
})
export class CelularesListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  celulares: any = [];

  constructor(private celularesService: CelularesService) { }

  ngOnInit() {
    this.getCelulares();
    }

    getCelulares() {
      this.celularesService.getCelulares().subscribe(
        res => {
          this.celulares = res;
        },
        err => console.error(err)
      );
    }

    deleteCelular(id: string) {
      this.celularesService.deleteCelular(id).subscribe(
        res => {
          console.log(res);
          this.getCelulares();
        },
        err => console.log(err)
      )
    }
  }