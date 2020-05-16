import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  constructor() { }
  @Input() iAnio: number;
  edad:number;
  ngOnInit(): void {
  }

}
