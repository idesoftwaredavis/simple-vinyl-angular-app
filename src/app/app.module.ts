import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlbumModule } from './albumes/album.module';
import { PadreComponent } from './padre/padre.component';
import { ListadoComponent } from './padre/components/listado/listado.component';
import { AgregarComponent } from './padre/components/agregar/agregar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditNgModelComponent } from './edit-ng-model/edit-ng-model.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    ListadoComponent,
    AgregarComponent,
    EditNgModelComponent
  ],
  imports: [
    BrowserModule,
    AlbumModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
