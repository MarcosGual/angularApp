import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloPrincipalComponent } from './articulo-principal.component';

describe('ArticuloPrincipalComponent', () => {
  let component: ArticuloPrincipalComponent;
  let fixture: ComponentFixture<ArticuloPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticuloPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
