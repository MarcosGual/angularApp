import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IfElseComponent } from './if-else/if-else.component';
import { CicloVidaComponent } from './ciclo-vida/ciclo-vida.component';
import { FormularioPlantillaComponent } from './formulario-plantilla/formulario-plantilla.component';
import { FormsModule } from '@angular/forms';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { AltaPersonaComponent } from './personas/alta-persona/alta-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    IfElseComponent,
    CicloVidaComponent,
    FormularioPlantillaComponent,
    ListadoPersonasComponent,
    AltaPersonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
