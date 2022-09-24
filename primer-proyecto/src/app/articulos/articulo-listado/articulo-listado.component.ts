import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-articulo-listado',
  templateUrl: './articulo-listado.component.html',
  styleUrls: ['./articulo-listado.component.css'],
})
export class ArticuloListadoComponent implements OnInit {
  @Input() articulos: Articulo[];
  @Output() onModificarArticulo = new EventEmitter<number>();
  @Output() onAgregarArticulo = new EventEmitter<number>();

  subscription = new Subscription();

  constructor(private articuloService: ArticuloService) {}

  ngOnInit(): void {
    this.actualizarListado();
  }

  // ngOnChanges():void{
  //   this.actualizarListado();
  // }

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

  modificarArticulo(articulo: Articulo) {
    this.onModificarArticulo.emit(articulo.id);
  }

  agregarArticulo(){
    this.onAgregarArticulo.emit();
  }
}
