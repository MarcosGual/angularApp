import { ASTWithSource } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EstadoPersonaService } from 'src/app/services/estado-persona.service';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css'],
})
export class ListadoPersonasComponent implements OnInit {
  valor: string;
  $valorObservable: Observable<string>;

  constructor(private estadoPersonaService: EstadoPersonaService) {}

  ngOnInit(): void {
    this.$valorObservable = this.estadoPersonaService.cambiosEstado();

    // this.estadoPersonaService.cambiosEstado().subscribe({
    //   next: (valor: string) => {
    //     this.valor = valor;
    //   },
    // });

    this.estadoPersonaService.estadoConComportamiento().subscribe({
      next: (valor: string) => {
        alert('Hola, ' + valor);
      },
    });
  }
}
