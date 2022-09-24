import { Injectable } from '@angular/core';
import { Articulo } from '../models/articulo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticuloService {
  articulos: Articulo[];

  constructor(private http: HttpClient) {
    this.articulos = [];
  }

  obtener(): Observable<Articulo[]> {
    const resultado = this.http.get<Articulo[]>(
      'http://localhost:3000/articulos'
    );
    return resultado;
  }

  eliminar(codigo: Number) {
    return this.http.delete(`http://localhost:3000/articulos/${codigo}`);
  }

  guardar(articulo: Articulo) {
    return this.http.post('http://localhost:3000/articulos', articulo);
  }

  obtenerxCodigo(id: number): Articulo {
    const index = this.articulos.findIndex((x) => x.id === id);
    return this.articulos[index];
  }

  modificar(articulo: Articulo) {
    const index = this.articulos.findIndex((x) => x === articulo);
    this.articulos.fill(articulo, index, index + 1);
  }
}
