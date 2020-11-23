import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePrescripcionVistaComponent } from './detalle-prescripcion-vista.component';

describe('DetallePrescripcionVistaComponent', () => {
  let component: DetallePrescripcionVistaComponent;
  let fixture: ComponentFixture<DetallePrescripcionVistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePrescripcionVistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePrescripcionVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
