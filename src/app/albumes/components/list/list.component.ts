import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Album } from "../../interface/album.interface";

@Component({
  selector: 'album-list',
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListAlbumComponent{

  public album: string ="Hola";
  // Declaro un input para recibir la lista de albumes desde el padre
  @Input() albumes!: Album[];
  @Output() public deleteEmitter: EventEmitter<string> = new EventEmitter();
  @Output() public fillModifierEmitter: EventEmitter<Album> = new EventEmitter();

  public deleteAlbum( id: string ):void{
    this.deleteEmitter.emit(id);
  }

  public modifierEmitter(album:Album):void{
    this.fillModifierEmitter.emit(album);
  }

}
