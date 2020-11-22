import { TestBed } from '@angular/core/testing';

import { DarprescripcionService } from './darprescripcion.service';

describe('DarprescripcionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DarprescripcionService = TestBed.get(DarprescripcionService);
    expect(service).toBeTruthy();
  });
});
