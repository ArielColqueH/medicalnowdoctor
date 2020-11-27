import { TestBed } from '@angular/core/testing';

import { MedicalHistoryListModelService } from './medical-history-list-model.service';

describe('MedicalHistoryListModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedicalHistoryListModelService = TestBed.get(MedicalHistoryListModelService);
    expect(service).toBeTruthy();
  });
});
