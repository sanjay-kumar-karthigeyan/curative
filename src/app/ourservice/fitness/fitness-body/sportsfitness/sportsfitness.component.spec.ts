import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsfitnessComponent } from './sportsfitness.component';

describe('SportsfitnessComponent', () => {
  let component: SportsfitnessComponent;
  let fixture: ComponentFixture<SportsfitnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsfitnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsfitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
