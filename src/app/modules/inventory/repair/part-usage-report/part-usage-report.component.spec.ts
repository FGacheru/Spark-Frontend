import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartUsageReportComponent } from './part-usage-report.component';

describe('PartUsageReportComponent', () => {
  let component: PartUsageReportComponent;
  let fixture: ComponentFixture<PartUsageReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartUsageReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartUsageReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
