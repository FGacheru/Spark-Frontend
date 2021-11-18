import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingCenterComponent } from './processing-center.component';

describe('ProcessingCenterComponent', () => {
  let component: ProcessingCenterComponent;
  let fixture: ComponentFixture<ProcessingCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessingCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessingCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
