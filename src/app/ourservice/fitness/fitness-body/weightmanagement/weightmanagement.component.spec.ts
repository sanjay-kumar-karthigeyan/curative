import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightmanagementComponent } from './weightmanagement.component';

describe('WeightmanagementComponent', () => {
  let component: WeightmanagementComponent;
  let fixture: ComponentFixture<WeightmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
