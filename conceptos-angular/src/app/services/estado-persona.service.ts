import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstadoPersonaService {
  private estadoSubject: Subject<string>;
  private estadoBehaviorSubject: BehaviorSubject<string>;

  constructor() {
    this.estadoSubject = new Subject<string>();
    this.estadoBehaviorSubject = new BehaviorSubject<string>('Estado Inicial');
  }

  cambiarEstado(valor: string): void {
    this.estadoSubject.next(valor);
  }

  //si hay alguien suscripto al observable de cambios
  // , va a escuchar cada vez que cambie
  cambiosEstado(): Observable<string> {
    return this.estadoSubject.asObservable();
  }

  estadoConComportamiento(): Observable<string> {
    return this.estadoBehaviorSubject.asObservable();
  }

  cambiarEstadoConComportamiento(valor: string) {
    this.estadoBehaviorSubject.next(valor);
  }
}