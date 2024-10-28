/*
  En Angular, un servicio es una clase que se utiliza para encapsular lógica de negocio,
  manejo de datos o funcionalidad que puede compartirse entre varios componentes. Los servicios se crean con el decorador
  @Inyectable() y generalmente se inyectan en los componentes o en otros servicios mediante inyección de dependencias.

  El decorador @Injectable indica que esta clase es un servicio y puede ser inyectado en otros componentes o servicios.

  Cuando declaro 'providedIn:'root', el servicio se registrará a nivel global, y estará disponible en toda la aplicación
  sin necesidad de agregarlo en providers de un módulo específico.
*/
import { Injectable } from "@angular/core";
import { v4 as uuid } from "uuid";
import { Album } from '../interface/album.interface';

@Injectable({
  providedIn: 'root'
})
export class AlbumService{
  constructor(){}

  // Defino data para mostrar (Luego se pondra en un archivo desde la carpeta Services)
  public dataAlbum: Album[] = [
    {
      id: uuid(),
      nombre: "Mac demarco",
      descripcion: "Salad Days",
      portada: "https://disqueriakyd.cl/wp-content/uploads/2018/11/mac-demarco-salad-days-2.jpg"
    },
    {
      id: uuid(),
      nombre: "Japanese Breakfast",
      descripcion: "Jubilee",
      portada: "https://dojiw2m9tvv09.cloudfront.net/41657/product/X_3945756-26992457012.jpg?86&time=1729741846"
    },
    {
      id: uuid(),
      nombre: "Alkaline trio",
      descripcion: "Blood, Hair, And Eyeballs",
      portada: "https://www.tonevendor.com/cdn/shop/files/29606347-0960295365b3e39b030d165b3e39b030d4170628802765b3e39b030d8.jpg?v=1719004695&width=990"
    },
    {
      id: uuid(),
      nombre: "Blink-182",
      descripcion: "One more time",
      portada: "https://musicland.cl/wp-content/uploads/2023/09/4252203-3045208-800x800.jpeg"
    },
    {
      id: uuid(),
      nombre: "Tame impala",
      descripcion: "Currents",
      portada: "https://dojiw2m9tvv09.cloudfront.net/41657/product/X_28895653844.jpg?86&time=1729736833"
    },
    {
      id: uuid(),
      nombre: "Angels and Airwaves",
      descripcion: "Love",
      portada: "https://i.ebayimg.com/images/g/c4sAAOSwMglnGHNO/s-l1600.webp"
    },
    {
      id: uuid(),
      nombre: "Angels and Airwaves",
      descripcion: "Lifeforms",
      portada: "https://blindtigerrecordclub.com/cdn/shop/products/angelsairwaveslifeforms.png?v=1632773697"
    },
    {
      id: uuid(),
      nombre: "Blink-182",
      descripcion: "Neighborhoods",
      portada: "https://interscope.com/cdn/shop/files/Blink182-Neighborhoods-2LP_1024x1024.png?v=1722473062"
    }
  ]

  /*
  public get albumes(): Album[]{
    // Propiedad que devuelve una copia de la lista de albumes
    return [...this.dataAlbum];
  }
  */

  public deleteAlbum(id: string){
    this.dataAlbum = this.dataAlbum.filter(album => album.id != id);
  }

  public getAlbumes(): Album[]{
    return [...this.dataAlbum]
  }

  public addAlbum(album: Album):void{
    this.dataAlbum.push(album);
  }
}

