import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeAEspecialistaComponent } from './mensaje-a-especialista.component';

describe('MensajeAEspecialistaComponent', () => {
  let component: MensajeAEspecialistaComponent;
  let fixture: ComponentFixture<MensajeAEspecialistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajeAEspecialistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeAEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
