import { Component } from "@angular/core";
import { Album } from '../interface/album.interface';
import { AlbumService } from "../services/album.services";


@Component({
  selector: 'album-main',
  standalone: false,
  templateUrl: "./main.component.html",
})
export class MainComponent{
  constructor(private _albumService: AlbumService){}

   public ngOnInit(): void {
    this.getAlbumes();
   }

  public albumModifier!:Album;
  public albumes!: Album[];

  public getAlbumes(){
    this.albumes = this._albumService.getAlbumes();
  }

  public deleteEmitter(id: string):void{
    if(id === '') return;
    this._albumService.deleteAlbum(id);
    this.getAlbumes();
  }


}
