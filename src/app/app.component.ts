import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  salvar(evento: any): void {
    alert(`Valor de Z = ${evento.z}`)
    console.log(evento)
  }
}
