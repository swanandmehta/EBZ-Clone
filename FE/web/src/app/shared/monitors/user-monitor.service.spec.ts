import { TestBed } from '@angular/core/testing';

import { UserMonitorService } from './user-monitor.service';

describe('UserMonitorService', () => {
  let service: UserMonitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserMonitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
