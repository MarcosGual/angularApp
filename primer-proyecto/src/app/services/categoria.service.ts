import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  categorias: Categoria[];

  constructor(private http: HttpClient) {
    this.categorias = [];
  }

  obtenerCategorias(): Observable<Categoria[]> {
    const resultado = this.http.get<Categoria[]>(
      'http://localhost:3000/categorias'
    );
    return resultado;
  }
}
