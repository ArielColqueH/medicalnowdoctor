import { TestBed } from '@angular/core/testing';

import { InformacionGeneralService } from './informacion-general.service';

describe('InformacionGeneralService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InformacionGeneralService = TestBed.get(InformacionGeneralService);
    expect(service).toBeTruthy();
  });
});
