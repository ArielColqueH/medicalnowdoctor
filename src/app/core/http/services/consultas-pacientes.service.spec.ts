import { TestBed } from '@angular/core/testing';

import { ConsultasPacientesService } from './consultas-pacientes.service';

describe('ConsultasPacientesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultasPacientesService = TestBed.get(ConsultasPacientesService);
    expect(service).toBeTruthy();
  });
});
