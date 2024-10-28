import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Album } from '../../interface/album.interface';

@Component({
  selector: 'add-app',
  templateUrl: './add.component.html',
})
export class AddComponent {

  public album:Album = {
    id:'',
    nombre:'',
    descripcion: '',
    portada: ''
  };

  @Input() public albumModifier?:Album;
  @Output() public albumItem : EventEmitter<Album> = new EventEmitter();


  public modificarEmitter(album:Album):void{
    //TODO: Modificar el usuario seleccionado
  }

  public agregarAlbumEmitter():void{
    if(this.album.nombre.length === 0 && this.album.descripcion.length === 0 && this.album.portada.length === 0) return;
    this.albumItem.emit(this.album);
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes['albumModifier'] && this.albumModifier){
      this.album = this.albumModifier;
    }
  }
}
