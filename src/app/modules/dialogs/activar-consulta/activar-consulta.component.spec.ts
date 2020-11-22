import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivarConsultaComponent } from './activar-consulta.component';

describe('ActivarConsultaComponent', () => {
  let component: ActivarConsultaComponent;
  let fixture: ComponentFixture<ActivarConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivarConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivarConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
