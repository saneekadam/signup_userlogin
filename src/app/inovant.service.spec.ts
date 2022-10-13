import { TestBed } from '@angular/core/testing';

import { InovantService } from './inovant.service';

describe('InovantService', () => {
  let service: InovantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InovantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
