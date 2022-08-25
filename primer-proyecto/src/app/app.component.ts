import { Component, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnChanges {
  title = 'primer-proyecto';

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented');
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  mostrar(valor: string) {
    alert('Hola, el valor de la variable es: ' + this.title);
  }
}
