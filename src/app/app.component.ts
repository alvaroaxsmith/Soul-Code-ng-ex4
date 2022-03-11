import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectAngular';

  constructor(private _snackBar: MatSnackBar) {}

  pacoteComprado():void {
    this._snackBar.open('Pacote comprado!', 'Fechar')
  }
}
