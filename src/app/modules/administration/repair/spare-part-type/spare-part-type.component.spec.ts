import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparePartTypeComponent } from './spare-part-type.component';

describe('SparePartTypeComponent', () => {
  let component: SparePartTypeComponent;
  let fixture: ComponentFixture<SparePartTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparePartTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SparePartTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
