import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayGoProvidersComponent } from './pay-go-providers.component';

describe('PayGoProvidersComponent', () => {
  let component: PayGoProvidersComponent;
  let fixture: ComponentFixture<PayGoProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayGoProvidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayGoProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
