import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePayGoComponent } from './change-pay-go.component';

describe('ChangePayGoComponent', () => {
  let component: ChangePayGoComponent;
  let fixture: ComponentFixture<ChangePayGoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePayGoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePayGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
