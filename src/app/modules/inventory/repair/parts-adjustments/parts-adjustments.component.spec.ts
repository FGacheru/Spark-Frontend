import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsAdjustmentsComponent } from './parts-adjustments.component';

describe('PartsAdjustmentsComponent', () => {
  let component: PartsAdjustmentsComponent;
  let fixture: ComponentFixture<PartsAdjustmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartsAdjustmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsAdjustmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
