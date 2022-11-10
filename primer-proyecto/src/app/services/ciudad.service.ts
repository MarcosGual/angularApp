import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciudad } from '../models/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  private API_URL: string = 'http://localhost:3000/ciudad';

  constructor(private http: HttpClient) {}

  obtenerListado(): Observable<Ciudad[]> {
    return this.http.get<Ciudad[]>(this.API_URL);
  }
}
