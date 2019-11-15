import { TestBed } from '@angular/core/testing';

import { DealService } from './deal.service';

describe('DealPromocodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DealService = TestBed.get(DealService);
    expect(service).toBeTruthy();
  });
});
