import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairCenterComponent } from './repair-center.component';

describe('RepairCenterComponent', () => {
  let component: RepairCenterComponent;
  let fixture: ComponentFixture<RepairCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
