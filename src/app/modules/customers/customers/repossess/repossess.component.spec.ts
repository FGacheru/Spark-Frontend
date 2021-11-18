import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepossessComponent } from './repossess.component';

describe('RepossessComponent', () => {
  let component: RepossessComponent;
  let fixture: ComponentFixture<RepossessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepossessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepossessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
