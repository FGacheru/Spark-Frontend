import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPriceGroupComponent } from './add-price-group.component';

describe('AddPriceGroupComponent', () => {
  let component: AddPriceGroupComponent;
  let fixture: ComponentFixture<AddPriceGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPriceGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPriceGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
