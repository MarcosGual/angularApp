import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Pais } from '../models/pais';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private API_URL: string = 'http://localhost:3000/pais';

  constructor(private http: HttpClient) {}

  obtenerListado(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.API_URL);
  }
}
