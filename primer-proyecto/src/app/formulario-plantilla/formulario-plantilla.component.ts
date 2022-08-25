import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-plantilla',
  templateUrl: './formulario-plantilla.component.html',
  styleUrls: ['./formulario-plantilla.component.css'],
})
export class FormularioPlantillaComponent implements OnInit {
  constructor() {}

  nombre: string = 'Marcos';
  apellido: string = 'Gual';
  dato: string='dato';

  ngOnInit(): void {}

  modelChange(){
    console.log(this.dato);
  }
}
