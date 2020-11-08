import { TestBed } from '@angular/core/testing';

import { ChatDoctorService } from './chat-doctor.service';

describe('ChatDoctorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatDoctorService = TestBed.get(ChatDoctorService);
    expect(service).toBeTruthy();
  });
});
