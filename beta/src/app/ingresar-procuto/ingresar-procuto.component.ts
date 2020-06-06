import { IngresarProductoService } from './../services/ingresarProducto.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresar-procuto',
  templateUrl: './ingresar-procuto.component.html',
  styleUrls: ['./ingresar-procuto.component.css']
})
export class IngresarProcutoComponent implements OnInit {

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _ingresarProductoService: IngresarProductoService
  ) { } //public  ruta: ActivatedRoute
  codigo = '';
  nombre = '';
  precio_venta = '';
  stock = '';
  descripcion = '';
  imagen = '';
  
  ngOnInit(): void {
    this._activatedRoute
      .params
      .subscribe((resultadoParametros) => {
        console.log(resultadoParametros);
      });
  }



  ingresar() {
    this._ingresarProductoService.ingresarProductos({
      codigo: this.codigo,
      nombre: this.nombre,
      precio_venta: this.precio_venta,
      stock: this.stock,
      descripcion: this.descripcion,
      imagen: this.imagen,
	
    }).subscribe(
      (registroCreado)=>{
        console.log('registroCreado');
        console.log(registroCreado);
        alert('Producto ingresado con Exito')
        //alert(registroCreado);
      }
    )
  
  }
}

