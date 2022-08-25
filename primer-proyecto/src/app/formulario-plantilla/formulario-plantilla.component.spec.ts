import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPlantillaComponent } from './formulario-plantilla.component';

describe('FormularioPlantillaComponent', () => {
  let component: FormularioPlantillaComponent;
  let fixture: ComponentFixture<FormularioPlantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPlantillaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
