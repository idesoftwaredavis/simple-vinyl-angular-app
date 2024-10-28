/*
  Este componente tiene un formulario simple para agregar un nuevo ítem y utiliza un @Output()
  para enviar el nuevo ítem al componente padre
*/

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',

})
export class AgregarComponent {
  public nuevoItem!: string;
  @Output() public nuevoItemEvent = new EventEmitter<string>();

  public agregarItem(): void {
    if( this.nuevoItem.trim() ){
      this.nuevoItemEvent.emit(this.nuevoItem);
      this.nuevoItem = '';
    }
  }

}
