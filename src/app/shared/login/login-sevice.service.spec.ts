import { TestBed } from '@angular/core/testing';

import { LoginSeviceService } from './login-sevice.service';

describe('LoginSeviceService', () => {
  let service: LoginSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
