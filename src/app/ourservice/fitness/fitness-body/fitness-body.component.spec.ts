import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessBodyComponent } from './fitness-body.component';

describe('FitnessBodyComponent', () => {
  let component: FitnessBodyComponent;
  let fixture: ComponentFixture<FitnessBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
