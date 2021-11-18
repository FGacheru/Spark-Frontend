import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchStockComponent } from './dispatch-stock.component';

describe('DispatchStockComponent', () => {
  let component: DispatchStockComponent;
  let fixture: ComponentFixture<DispatchStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispatchStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
