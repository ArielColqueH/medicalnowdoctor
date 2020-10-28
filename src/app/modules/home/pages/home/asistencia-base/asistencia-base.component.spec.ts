import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciaBaseComponent } from './asistencia-base.component';

describe('AsistenciaBaseComponent', () => {
  let component: AsistenciaBaseComponent;
  let fixture: ComponentFixture<AsistenciaBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsistenciaBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenciaBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
