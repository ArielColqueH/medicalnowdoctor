import { TestBed } from '@angular/core/testing';

import { DarAltaService } from './dar-alta.service';

describe('DarAltaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DarAltaService = TestBed.get(DarAltaService);
    expect(service).toBeTruthy();
  });
});
