import { Component, OnInit } from '@angular/core';
import { EstadoPersonaService } from 'src/app/services/estado-persona.service';

@Component({
  selector: 'app-alta-persona',
  templateUrl: './alta-persona.component.html',
  styleUrls: ['./alta-persona.component.css'],
})
export class AltaPersonaComponent implements OnInit {
  constructor(private estadoPersonaService: EstadoPersonaService) {}

  ngOnInit(): void {}

  cambiarEstado() {
    this.estadoPersonaService.cambiarEstado('ALTA');
  }
}
