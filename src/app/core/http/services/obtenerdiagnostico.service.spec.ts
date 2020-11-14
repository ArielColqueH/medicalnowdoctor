import { TestBed } from '@angular/core/testing';

import { ObtenerdiagnosticoService } from './obtenerdiagnostico.service';

describe('ObtenerdiagnosticoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObtenerdiagnosticoService = TestBed.get(ObtenerdiagnosticoService);
    expect(service).toBeTruthy();
  });
});
