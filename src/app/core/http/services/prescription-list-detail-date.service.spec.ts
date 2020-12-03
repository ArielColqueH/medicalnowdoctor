import { TestBed } from '@angular/core/testing';

import { PrescriptionListDetailDateService } from './prescription-list-detail-date.service';

describe('PrescriptionListDetailDateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrescriptionListDetailDateService = TestBed.get(PrescriptionListDetailDateService);
    expect(service).toBeTruthy();
  });
});
