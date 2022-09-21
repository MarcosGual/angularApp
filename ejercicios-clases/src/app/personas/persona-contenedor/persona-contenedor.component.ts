import { Component } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-contenedor',
  templateUrl: './persona-contenedor.component.html',
  styleUrls: ['./persona-contenedor.component.css']
})
export class PersonaContenedorComponent {
  formularioVisible: boolean = false;
  listadoPersonas: Persona[] = [];

  constructor(private servicioPersona: PersonaService) {}

  mostrarFormulario(visible: boolean) {
    this.formularioVisible = visible;
  }

  actualizarListado() {
    this.listadoPersonas = this.servicioPersona.obtenerListado();
    this.mostrarFormulario(false);
  }

  eliminarPersona(persona: Persona) {
    this.servicioPersona.eliminar(persona);
  }

}
