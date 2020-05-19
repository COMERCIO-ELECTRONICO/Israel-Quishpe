import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-angular';
  esconderHola = false;
  arregloNuemros = [{ nombre: 'Israel' }, { nombre: 'orlando' }];

  eventoClick() {
    this.esconderHola = true;
  }
}
