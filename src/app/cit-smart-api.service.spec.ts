import { TestBed } from '@angular/core/testing';

import { CitSmartApiService } from './cit-smart-api.service';

describe('CitSmartApiService', () => {
  let service: CitSmartApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitSmartApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
