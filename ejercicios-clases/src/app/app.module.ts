import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonaListadoComponent } from './personas/persona-listado/persona-listado.component';
import { PersonaAltaComponent } from './personas/persona-alta/persona-alta.component';
import { PersonaService } from './services/persona.service';
import { PersonaContenedorComponent } from './personas/persona-contenedor/persona-contenedor.component';

@NgModule({
  declarations: [AppComponent, PersonaListadoComponent, PersonaAltaComponent, PersonaContenedorComponent],
  imports: [BrowserModule, FormsModule],
  providers: [PersonaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
