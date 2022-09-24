import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-articulo-baja',
  templateUrl: './articulo-baja.component.html',
  styleUrls: ['./articulo-baja.component.css'],
})
export class ArticuloBajaComponent implements OnInit, OnDestroy {
  @Input() articulo: Articulo;
  @Output() onBajaArticulo = new EventEmitter();

  subscription = new Subscription();

  constructor(private articuloService: ArticuloService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  bajaArticulo(): void {
    if (confirm('Está seguro de que desea eliminar el artículo?')) {
      const baja = this.articuloService.eliminar(this.articulo.id);
      baja.subscribe();
      alert('Artículo eliminado!');
      this.onBajaArticulo.emit();
    } else {
      throw new Error('Error en la baja del artículo...');
    }
  }
}
