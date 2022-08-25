import {
  Component,
  SimpleChanges,
  OnChanges,
  OnInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnChanges, OnInit, OnDestroy {
  title = 'primer-proyecto';

  dato: string = '';

  constructor() {}

  ngOnInit(): void {
    this.dato = 'hola';
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    throw new Error('Metod not implemented.');
  }

  mostrar(valor: string) {
    alert('Hola, el valor de la variable es: ' + this.title);
  }
}
