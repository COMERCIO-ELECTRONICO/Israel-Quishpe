import { Component, OnInit, HostBinding } from '@angular/core';
import { Celular } from '../../models/celulares';
import { CelularesService } from '../../services/celulares.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-celulares-form',
  templateUrl: './celulares-form.component.html',
  styleUrls: ['./celulares-form.component.css']
})
export class CelularesFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  celular: Celular = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date(),
    stock: 0,
    precio: 0
  };
  editar: boolean = false

  constructor(private celularesService: CelularesService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.celularesService.getCelular(params.id)
      .subscribe(
      res => {
        console.log(res);
        this.celular = res;
        this.editar = true;
      },
      err => console.error(err)
      )
    }
  }

  saveNewCelular() {
    delete this.celular.created_at;
    delete this.celular.id;

    this.celularesService.saveCelular(this.celular)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/celulares']);
      },
      err => console.error(err)
      )
  }
  updateCelular() {
    delete this.celular.created_at;
    this.celularesService.updateCelular(this.celular.id, this.celular)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/celulares']);
      },
      err => console.log(err)
    )
  }

}
