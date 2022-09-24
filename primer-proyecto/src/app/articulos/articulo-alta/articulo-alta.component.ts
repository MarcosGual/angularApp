import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-articulo-alta',
  templateUrl: './articulo-alta.component.html',
  styleUrls: ['./articulo-alta.component.css'],
})
export class ArticuloAltaComponent implements OnInit {
  @Input() categorias: Categoria[];

  subscription=new Subscription();

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.actualizarCombo();
  }

  actualizarCombo() {
    const obtenerSuscripcion = this.categoriaService.obtenerCategorias().subscribe({
      next: (categorias: Categoria[]) => {
        this.categorias = categorias;
      },
      error: () => {
        throw new Error('Error en la conexión...');
      },
    });

    this.subscription.add(obtenerSuscripcion);
  }
}
