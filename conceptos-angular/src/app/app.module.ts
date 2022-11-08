import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AltaPersonaComponent } from './personas/alta-persona/alta-persona.component';
import { BajaPersonaComponent } from './personas/baja-persona/baja-persona.component';
import { ListadoPersonasComponent } from './personas/listado-personas/listado-personas.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaPersonaComponent,
    BajaPersonaComponent,
    ListadoPersonasComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
