import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Articulo } from 'src/app/models/articulo';
import { Categoria } from 'src/app/models/categoria';
import { ArticuloService } from 'src/app/services/articulo.service';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-articulo-modificacion',
  templateUrl: './articulo-modificacion.component.html',
  styleUrls: ['./articulo-modificacion.component.css'],
})
export class ArticuloModificacionComponent implements OnInit {
  @Input() codigo: number;
  @Input() articulos:Articulo[];
  @Output() onConfirmar = new EventEmitter();
  @Output() onCancelar = new EventEmitter();

  articulo: Articulo;
  categorias: Categoria[];
  subscription = new Subscription();

  constructor(
    private articuloService: ArticuloService,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.articulo = this.obtenerxCodigo(this.codigo);
    this.obtenerCategorias();
  }

  obtenerxCodigo(id: number): Articulo {
    const index = this.articulos.findIndex((x) => x.id === id);
    return this.articulos[index];
  }

  obtenerCategorias() {
    const obtenerSuscripcion = this.categoriaService
      .obtenerCategorias()
      .subscribe({
        next: (categorias: Categoria[]) => {
          this.categorias = categorias;
        },
        error: () => {
          throw new Error('Error en la conexión...');
        },
      });

    this.subscription.add(obtenerSuscripcion);
  }

  guardarArticulo() {
    this.articuloService.modificar(this.articulo);
    this.onConfirmar.emit();
  }

  cancelar(){
    this.onCancelar.emit();
  }
}
