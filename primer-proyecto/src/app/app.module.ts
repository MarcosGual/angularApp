import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IfElseComponent } from './if-else/if-else.component';
import { CicloVidaComponent } from './ciclo-vida/ciclo-vida.component';
import { FormularioPlantillaComponent } from './formulario-plantilla/formulario-plantilla.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IfElseComponent,
    CicloVidaComponent,
    FormularioPlantillaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
