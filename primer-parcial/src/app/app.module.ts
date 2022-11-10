import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArticuloListadoComponent } from './articulos/articulo-listado/articulo-listado.component';
import { ArticuloAltaComponent } from './articulos/articulo-alta/articulo-alta.component';
import { ArticuloBajaComponent } from './articulos/articulo-baja/articulo-baja.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticuloModificacionComponent } from './articulos/articulo-modificacion/articulo-modificacion.component';
import { EsMayorPipe } from './pipes/es-mayor.pipe';
import { SelectProyeccionComponent } from './select-proyeccion/select-proyeccion.component';
import { CambiarColorDirective } from './directives/cambiar-color.directive';
import { ValidarPermisoDirective } from './directives/validar-permiso.directive';

@NgModule({
  declarations: [
    AppComponent,
    ArticuloListadoComponent,
    ArticuloAltaComponent,
    ArticuloBajaComponent,
    ArticuloModificacionComponent,
    EsMayorPipe,
    SelectProyeccionComponent,
    CambiarColorDirective,
    ValidarPermisoDirective
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
