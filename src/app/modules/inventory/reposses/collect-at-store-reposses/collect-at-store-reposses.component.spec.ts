import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectAtStoreRepossesComponent } from './collect-at-store-reposses.component';

describe('CollectAtStoreRepossesComponent', () => {
  let component: CollectAtStoreRepossesComponent;
  let fixture: ComponentFixture<CollectAtStoreRepossesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectAtStoreRepossesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectAtStoreRepossesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
