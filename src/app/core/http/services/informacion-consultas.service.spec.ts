import { TestBed } from '@angular/core/testing';

import { InformacionConsultasService } from './informacion-consultas.service';

describe('InformacionConsultasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InformacionConsultasService = TestBed.get(InformacionConsultasService);
    expect(service).toBeTruthy();
  });
});
