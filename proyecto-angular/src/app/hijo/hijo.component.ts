import { Component, OnInit, Input } from '@angular/core';
import { PadreComponent } from '../padre/padre.component';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  constructor(public padre: PadreComponent) { }
  @Input() vanio: number;
  edad:number;
  ngOnInit(): void {
  }
  edadCalcular(){
    this.edad=2020-this.vanio;
    this.padre.edad=this.edad;
  }
}
