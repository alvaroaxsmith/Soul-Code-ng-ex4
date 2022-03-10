import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent {

  @Input()
  tituloCard: string = 'Algum Título'

  @Input()
  background: string = 'green'

  @Output()
  eventoPersonalizado: EventEmitter<any> = new EventEmitter<any>()

  emitirEventoPersonalizado(): void {
    this.eventoPersonalizado.emit({x: 'Prop1', y:556, z:true, w: [1, 2, 3]})
  }
}
