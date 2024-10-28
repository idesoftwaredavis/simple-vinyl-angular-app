import { NgModule } from "@angular/core";

import { MainComponent } from "../albumes/pages/main.component";
import { ListAlbumComponent } from "../albumes/components/list/list.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AddComponent } from "./components/add/add.component";


@NgModule({
  declarations: [
    MainComponent,
    AddComponent,
    ListAlbumComponent,
  ],
  imports:[CommonModule,
           FormsModule],

  exports:[
    MainComponent
  ]
})

export class AlbumModule { }
