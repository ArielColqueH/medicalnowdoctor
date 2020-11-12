import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivadasBaseComponent } from './archivadas-base.component';

describe('ArchivadasBaseComponent', () => {
  let component: ArchivadasBaseComponent;
  let fixture: ComponentFixture<ArchivadasBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivadasBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivadasBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
