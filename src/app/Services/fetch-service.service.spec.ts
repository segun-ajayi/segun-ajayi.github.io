import { TestBed } from '@angular/core/testing';

import { FetchServiceService } from './fetch-service.service';

describe('FetchServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchServiceService = TestBed.get(FetchServiceService);
    expect(service).toBeTruthy();
  });
});
