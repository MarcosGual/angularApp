import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProyeccionComponent } from './select-proyeccion.component';

describe('SelectProyeccionComponent', () => {
  let component: SelectProyeccionComponent;
  let fixture: ComponentFixture<SelectProyeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectProyeccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectProyeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
