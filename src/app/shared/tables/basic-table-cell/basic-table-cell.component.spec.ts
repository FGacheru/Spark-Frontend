import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTableCellComponent } from './basic-table-cell.component';

describe('BasicTableCellComponent', () => {
  let component: BasicTableCellComponent;
  let fixture: ComponentFixture<BasicTableCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicTableCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
