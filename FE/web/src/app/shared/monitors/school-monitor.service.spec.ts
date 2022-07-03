import { TestBed } from '@angular/core/testing';

import { SchoolMonitorService } from './school-monitor.service';

describe('SchoolMonitorService', () => {
  let service: SchoolMonitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolMonitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
