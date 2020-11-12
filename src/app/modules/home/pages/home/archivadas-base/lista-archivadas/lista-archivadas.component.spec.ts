import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaArchivadasComponent } from './lista-archivadas.component';

describe('ListaArchivadasComponent', () => {
  let component: ListaArchivadasComponent;
  let fixture: ComponentFixture<ListaArchivadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaArchivadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaArchivadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
