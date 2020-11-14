import { TestBed } from '@angular/core/testing';

import { MandardiagnosticoService } from './mandardiagnostico.service';

describe('MandardiagnosticoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MandardiagnosticoService = TestBed.get(MandardiagnosticoService);
    expect(service).toBeTruthy();
  });
});
