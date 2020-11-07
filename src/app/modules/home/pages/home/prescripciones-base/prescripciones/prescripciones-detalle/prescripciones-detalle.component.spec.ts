import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescripcionesDetalleComponent } from './prescripciones-detalle.component';

describe('PrescripcionesDetalleComponent', () => {
  let component: PrescripcionesDetalleComponent;
  let fixture: ComponentFixture<PrescripcionesDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescripcionesDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescripcionesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
