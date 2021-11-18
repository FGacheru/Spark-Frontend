import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangelogTableComponent } from './changelog-table.component';

describe('ChangelogTableComponent', () => {
  let component: ChangelogTableComponent;
  let fixture: ComponentFixture<ChangelogTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangelogTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangelogTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
