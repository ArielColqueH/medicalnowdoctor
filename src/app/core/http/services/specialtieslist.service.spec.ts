import { TestBed } from '@angular/core/testing';

import { SpecialtieslistService } from './specialtieslist.service';

describe('SpecialtieslistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpecialtieslistService = TestBed.get(SpecialtieslistService);
    expect(service).toBeTruthy();
  });
});
