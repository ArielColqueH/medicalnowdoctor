import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarAltaComponent } from './dar-alta.component';

describe('DarAltaComponent', () => {
  let component: DarAltaComponent;
  let fixture: ComponentFixture<DarAltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarAltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
