/*
  1. Configura el Array inicial: Define un array de objetos en el componente que contenga los datos que deseas editar.
  2. Selecciona el ítem para Editar: agrega una variable que almacene el ítem seleccionado, y permite que el usuario haga clic en un ítem para editarlo.
  3. Usa ngModel para Editar: Usa ngModel en el formulario de edición para enlazar el input al objeto seleccionado. Los cambios se reflejarán en tiempo real.
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-ng-model',
  templateUrl: './edit-ng-model.component.html',
})
export class EditNgModelComponent {

  public items =[{ id:1,name: 'Item 1 '}, { id: 2, name: 'Item 2'}]; // Array de items
  public selectedItem: any = null// item seleccionado para editar

  public seleccionarItem(item: any): void{
    this.selectedItem = {...item} // Crear una copia para evitar modificar el original hasta que se guarde
  }

  public guardarEdicion(): void {
    // Buscar el índice del ítem original en el array
    const index = this.items.findIndex(i => i.id === this.selectedItem.id );
    if (index > -1){
      // Reemplazar el ítem original con el editado
      this.items[index] = this.selectedItem;
      this.selectedItem = null // Limpiar la selección.
    }
  }
}
