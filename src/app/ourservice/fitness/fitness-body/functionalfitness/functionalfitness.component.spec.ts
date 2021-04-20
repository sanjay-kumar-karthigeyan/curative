import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalfitnessComponent } from './functionalfitness.component';

describe('FunctionalfitnessComponent', () => {
  let component: FunctionalfitnessComponent;
  let fixture: ComponentFixture<FunctionalfitnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionalfitnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalfitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
