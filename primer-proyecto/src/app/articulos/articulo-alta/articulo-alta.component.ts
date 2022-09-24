import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Articulo } from 'src/app/models/articulo';
import { Categoria } from 'src/app/models/categoria';
import { ArticuloService } from 'src/app/services/articulo.service';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-articulo-alta',
  templateUrl: './articulo-alta.component.html',
  styleUrls: ['./articulo-alta.component.css'],
})
export class ArticuloAltaComponent implements OnInit, OnDestroy {
  @Input() categorias: Categoria[];
  @Output() onConfirmarArticulo=new EventEmitter();
  @Output() onCancelarAlta=new EventEmitter();
  articulo: Articulo;

  @ViewChild('articuloForm') formulario: NgForm;

  subscription = new Subscription();

  constructor(private categoriaService: CategoriaService, private articuloService:ArticuloService) {}

  ngOnInit(): void {
    this.actualizarCombo();
    this.articulo = new Articulo();
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

  actualizarCombo() {
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

  guardarArticulo(){
    if(this.formulario.invalid){
      alert('Por favor complete correctamente los campos...')
    }else{
      this.articuloService.guardar(this.articulo).subscribe({
        next: ()=>{
          this.onConfirmarArticulo.emit();
        },
        error: ()=>{
          throw new Error('Error en el guardado del artículo...')
        }
      })
    }
  }

  cancelar(){
    this.onCancelarAlta.emit();
  }
}
