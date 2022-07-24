import { TestBed } from '@angular/core/testing';

import { EarningWidgetService } from './earning-widget.service';

describe('EarningWidgetService', () => {
  let service: EarningWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EarningWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
