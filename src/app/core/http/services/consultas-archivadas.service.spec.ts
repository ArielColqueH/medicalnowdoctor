import { TestBed } from '@angular/core/testing';

import { ConsultasArchivadasService } from './consultas-archivadas.service';

describe('ConsultasArchivadasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultasArchivadasService = TestBed.get(ConsultasArchivadasService);
    expect(service).toBeTruthy();
  });
});
