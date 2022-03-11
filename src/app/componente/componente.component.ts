import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent {

  @Input()
  titulo: string = ''
  @Input()
  preco: string = ''
  @Input()
  hd: string = ''
  @Input()
  users: string = ''
  @Input()
  sendup: string = ''
  @Input()
  id: string = ''

  @Output()
  btnClickEvent: EventEmitter<any> = new EventEmitter<any>()

  emitirEvento():void {
    this.btnClickEvent.emit()
  }
}
