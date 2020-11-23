import { TestBed } from '@angular/core/testing';

import { HistorialMedicoService } from './historial-medico.service';

describe('HistorialMedicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistorialMedicoService = TestBed.get(HistorialMedicoService);
    expect(service).toBeTruthy();
  });
});
