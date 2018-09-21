import { TestBed } from '@angular/core/testing';

import { AuthenService } from './authen.service';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenService = TestBed.get(AuthenService);
    expect(service).toBeTruthy();
  });
});
