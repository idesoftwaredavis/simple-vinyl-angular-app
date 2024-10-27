/*
  El componente padre mantendrá el estado de los elementos en un array y proporcionará métodos par aagregar,
  editar y eliminar elementos. También enviará la lista de elementos al componente de listado.

  Explicación de la comunicación entre los componentes de esta app

  1. El componente Agregar ítems usa @Output para emitir el nuevo elemento, y el componente padre lo recibe con (nuevoItem),
  llamando al método agregarItem.

  2. El componente Listado recibe el array desde el componente padre con @Input y utiliza @Output para emitir el índice del elemento a eliminar



*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  items: string[] = []; // Array de elementos

  public agregarItem( nuevoItem: string): void {
    this.items.push(nuevoItem);
  }

  public eliminarItem(index: number){
    this.items.splice(index,1);
  }
}
