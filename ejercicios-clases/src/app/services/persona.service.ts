import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';

@Injectable()
export class PersonaService {
  private listado: Persona[];

  constructor() { 
    this.listado = [];
  }

  obtenerListado(): Persona[] {
    return this.listado;
  }

  eliminar(persona: Persona): void {
    const index = this.listado.findIndex((x) => x === persona);
    this.listado.splice(index, 1);
  }

  agregar(persona: Persona) {
    this.listado.push(persona);
  }
}
