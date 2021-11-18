import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangelogTableCellComponent } from './changelog-table-cell.component';

describe('ChangelogTableCellComponent', () => {
  let component: ChangelogTableCellComponent;
  let fixture: ComponentFixture<ChangelogTableCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangelogTableCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangelogTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
