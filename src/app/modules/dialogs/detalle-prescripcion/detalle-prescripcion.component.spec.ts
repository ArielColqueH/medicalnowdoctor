import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePrescripcionComponent } from './detalle-prescripcion.component';

describe('DetallePrescripcionComponent', () => {
  let component: DetallePrescripcionComponent;
  let fixture: ComponentFixture<DetallePrescripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePrescripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePrescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
