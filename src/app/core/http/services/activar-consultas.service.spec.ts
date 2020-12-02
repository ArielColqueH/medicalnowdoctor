import { TestBed } from '@angular/core/testing';

import { ActivarConsultasService } from './activar-consultas.service';

describe('ActivarConsultasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivarConsultasService = TestBed.get(ActivarConsultasService);
    expect(service).toBeTruthy();
  });
});
