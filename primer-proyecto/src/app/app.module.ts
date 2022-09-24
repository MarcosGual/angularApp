import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ArticuloAltaComponent } from './articulos/articulo-alta/articulo-alta.component';
import { ArticuloListadoComponent } from './articulos/articulo-listado/articulo-listado.component';
import { ArticuloPrincipalComponent } from './articulos/articulo-principal/articulo-principal.component';
import { ArticuloBajaComponent } from './articulos/articulo-baja/articulo-baja.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ArticuloAltaComponent,
    ArticuloListadoComponent,
    ArticuloPrincipalComponent,
    ArticuloBajaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
