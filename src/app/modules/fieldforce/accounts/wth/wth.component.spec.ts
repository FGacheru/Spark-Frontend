import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WthComponent } from './wth.component';

describe('WthComponent', () => {
  let component: WthComponent;
  let fixture: ComponentFixture<WthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
