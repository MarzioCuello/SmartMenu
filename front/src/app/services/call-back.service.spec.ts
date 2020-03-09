import { TestBed } from '@angular/core/testing';

import { CallBackService } from './call-back.service';

describe('CallBackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallBackService = TestBed.get(CallBackService);
    expect(service).toBeTruthy();
  });
});
