import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectAtStorreComponent } from './collect-at-storre.component';

describe('CollectAtStorreComponent', () => {
  let component: CollectAtStorreComponent;
  let fixture: ComponentFixture<CollectAtStorreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectAtStorreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectAtStorreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
