import { Component, OnInit } from '@angular/core';
import { EstadoPersonaService } from 'src/app/services/estado-persona.service';

@Component({
  selector: 'app-baja-persona',
  templateUrl: './baja-persona.component.html',
  styleUrls: ['./baja-persona.component.css'],
})
export class BajaPersonaComponent implements OnInit {
  constructor(private estadoPersonaService: EstadoPersonaService) {}

  ngOnInit(): void {}

  eliminar(): void {
    this.estadoPersonaService.cambiarEstado('BAJA');
  }
}
