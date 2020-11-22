import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialListaDetalleComponent } from './historial-lista-detalle.component';

describe('HistorialListaDetalleComponent', () => {
  let component: HistorialListaDetalleComponent;
  let fixture: ComponentFixture<HistorialListaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialListaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialListaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
