import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciaMedicaComponent } from './asistencia-medica.component';

describe('AsistenciaMedicaComponent', () => {
  let component: AsistenciaMedicaComponent;
  let fixture: ComponentFixture<AsistenciaMedicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsistenciaMedicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenciaMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
