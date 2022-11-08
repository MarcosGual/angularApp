import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstadoPersonaService {
  private estadoSubject: Subject<boolean>;

  constructor() {
    this.estadoSubject = new Subject<boolean>();
  }

  cambiarEstado(valor: boolean): void {
    this.estadoSubject.next(valor);
  }

  cambiosEstado(): Observable<boolean> {
    //const resultado = this.http.get<boolean>('');

    return this.estadoSubject.asObservable();
  }
}
