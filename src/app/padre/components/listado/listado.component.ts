/*
  Este componente recibe el array desde el componente padre a través de la propiedad @Input() y emite un evento
  Output() para indicar al padre cuando se debe eliminar un elemento.
*/

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  @Input() public items: string[]=[];
  @Output() eliminar = new EventEmitter<number>();

  public eliminarItem(index: number): void{
    this.eliminar.emit(index);
  }
}
