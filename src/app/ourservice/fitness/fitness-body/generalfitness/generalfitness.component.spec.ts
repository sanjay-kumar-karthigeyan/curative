import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralfitnessComponent } from './generalfitness.component';

describe('GeneralfitnessComponent', () => {
  let component: GeneralfitnessComponent;
  let fixture: ComponentFixture<GeneralfitnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralfitnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralfitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
