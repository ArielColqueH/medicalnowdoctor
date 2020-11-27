import { TestBed } from '@angular/core/testing';

import { MedicalHistoryListDetailService } from './medical-history-list-detail.service';

describe('MedicalHistoryListDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedicalHistoryListDetailService = TestBed.get(MedicalHistoryListDetailService);
    expect(service).toBeTruthy();
  });
});
