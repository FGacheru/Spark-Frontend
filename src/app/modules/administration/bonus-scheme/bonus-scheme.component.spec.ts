import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusSchemeComponent } from './bonus-scheme.component';

describe('BonusSchemeComponent', () => {
  let component: BonusSchemeComponent;
  let fixture: ComponentFixture<BonusSchemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusSchemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
