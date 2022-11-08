import { Component, OnInit } from '@angular/core';
import { EstadoPersonaService } from 'src/app/services/estado-persona.service';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css'],
})
export class ListadoPersonasComponent implements OnInit {
  constructor(private estadoPersonaService: EstadoPersonaService) {}

  ngOnInit(): void {
    this.estadoPersonaService.cambiosEstado().subscribe({
      next: (valor: boolean) => {
        alert('El estado de persona cambió a: ' + valor);
      },
    });
  }
}
