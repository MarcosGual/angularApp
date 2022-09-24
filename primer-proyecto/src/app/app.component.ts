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
export class AppComponent implements OnInit {
  title = 'primer-proyecto';

  dato: string = '';

  constructor() {}

  ngOnInit(): void {
    //this.dato = 'hola';
  }
}
