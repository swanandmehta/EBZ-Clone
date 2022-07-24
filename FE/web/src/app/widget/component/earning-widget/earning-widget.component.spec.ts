import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningWidgetComponent } from './earning-widget.component';

describe('EarningWidgetComponent', () => {
  let component: EarningWidgetComponent;
  let fixture: ComponentFixture<EarningWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarningWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarningWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
