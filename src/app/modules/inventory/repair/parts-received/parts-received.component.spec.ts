import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsReceivedComponent } from './parts-received.component';

describe('PartsReceivedComponent', () => {
  let component: PartsReceivedComponent;
  let fixture: ComponentFixture<PartsReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartsReceivedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
