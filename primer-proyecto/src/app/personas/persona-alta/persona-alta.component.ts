import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ciudad } from 'src/app/models/ciudad';

import { Pais } from 'src/app/models/pais';
import { Persona } from 'src/app/models/persona';
import { CiudadService } from 'src/app/services/ciudad.service';

import { PaisService } from 'src/app/services/pais.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-alta',
  templateUrl: './persona-alta.component.html',
  styleUrls: ['./persona-alta.component.css'],
})
export class PersonaAltaComponent implements OnInit {
  @ViewChild('personaForm') formulario: NgForm;
  personaForm: FormGroup;
  enviado: boolean = false;

  persona: Persona;
  paises: Pais[];
  ciudades: Ciudad[];
  ciudadesSelect:Ciudad[];

  private subscription = new Subscription();

  constructor(
    private personaService: PersonaService,
    private paisService: PaisService,
    private ciudadService: CiudadService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.personaForm = this.fb.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.maxLength(15),
          Validators.minLength(3),
        ],
      ],
      apellido: ['', Validators.required],
      edad: [
        '',
        [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      ],
      paisId: ['', Validators.required],
      ciudadId: ['', Validators.required],
    });

    this.persona = new Persona();
    this.subscription.add(
      this.paisService.obtenerListado().subscribe({
        next: (listado: Pais[]) => {
          this.paises = listado;
        },
        error: () => {
          alert('error al obtener paises');
        },
      })
    );

    this.subscription.add(
      this.ciudadService.obtenerListado().subscribe({
        next: (listado: Ciudad[]) => {
          this.ciudades = listado;
        },
        error: () => {
          alert('error al obtener paises');
        },
      })
    );

    if (this.personaForm) {
      if (this.personaForm.get('paisId')) {
        const variable = this.personaForm.get('paisId'); // create a variable
        variable!.valueChanges.subscribe((value) => {
          console.log(this.ciudades, value);
          this.ciudadesSelect = this.ciudades.filter((x) => x.paisId == value);
          console.log(this.ciudades);
        }); // use Non-null assertion operator(used in Typescript 2)
      }
    }
  }

  setValue(pais: string) {
    this.personaForm.controls['ciudadId'].setValue(pais);
  }

  get controlNombre(): FormControl {
    return this.personaForm.controls['nombre'] as FormControl;
  }

  get controlApellido(): FormControl {
    return this.personaForm.controls['apellido'] as FormControl;
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.personaForm.value);
    this.enviado = true;
    this.personaForm.valid
      ? this.guardar()
      : console.error('Error en la validación');
  }

  guardar() {
    this.personaForm.value.paisId = Number(this.personaForm.value.paisId);
    this.subscription.add(
      this.personaService.agregar(this.personaForm.value).subscribe({
        next: () => {
          this.irAListado();
        },
        error: () => {
          alert('error al guardar');
        },
      })
    );
  }

  cancelar() {
    this.irAListado();
  }

  private irAListado() {
    this.router.navigate(['']);
  }
}
