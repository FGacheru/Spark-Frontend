import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedTableComponent } from './checked-table.component';

describe('CheckedTableComponent', () => {
  let component: CheckedTableComponent;
  let fixture: ComponentFixture<CheckedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckedTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
