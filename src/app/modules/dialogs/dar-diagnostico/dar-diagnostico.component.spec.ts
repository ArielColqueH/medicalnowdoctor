import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarDiagnosticoComponent } from './dar-diagnostico.component';

describe('DarDiagnosticoComponent', () => {
  let component: DarDiagnosticoComponent;
  let fixture: ComponentFixture<DarDiagnosticoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarDiagnosticoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarDiagnosticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
