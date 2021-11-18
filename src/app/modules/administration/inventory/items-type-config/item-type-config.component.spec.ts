import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsTypeConfigComponent } from './item-type-config.component';

describe('ItemsTypeConfigComponent', () => {
  let component: ItemsTypeConfigComponent;
  let fixture: ComponentFixture<ItemsTypeConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsTypeConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsTypeConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
