import { TestBed } from '@angular/core/testing';

import { BackendInterceptorService } from './backend-interceptor.service';

describe('BackendInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackendInterceptorService = TestBed.get(BackendInterceptorService);
    expect(service).toBeTruthy();
  });
});
