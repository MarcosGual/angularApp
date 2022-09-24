import { Component, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-articulo-principal',
  templateUrl: './articulo-principal.component.html',
  styleUrls: ['./articulo-principal.component.css'],
})
export class ArticuloPrincipalComponent implements OnInit {
  @Output() articulos: Articulo[];
  subscription = new Subscription();
  codigoSeleccionado: number;
  formularioAltaVisible: boolean = false;
  formularioModificacionVisible: boolean = false;

  constructor(private articuloService: ArticuloService) {}

  ngOnInit(): void {
    this.actualizarListado();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  actualizarListado() {
    const obtenerSuscripcion = this.articuloService.obtener().subscribe({
      next: (articulos: Articulo[]) => {
        this.articulos = articulos;
      },
      error: () => {
        throw new Error('Error en la conexión...');
      },
    });

    this.subscription.add(obtenerSuscripcion);
  }

  mostrarFormularioAlta(visible: boolean) {
    this.formularioAltaVisible = visible;
    this.formularioModificacionVisible = false;
  }

  mostrarFormularioModificacion(visible: boolean) {
    this.formularioModificacionVisible = visible;
    this.formularioAltaVisible = false;
  }

  cargarArticuloModificacion(id: number) {
    this.codigoSeleccionado = id;
    this.mostrarFormularioModificacion(true);
  }
}
