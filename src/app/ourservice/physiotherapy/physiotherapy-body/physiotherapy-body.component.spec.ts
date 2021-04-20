import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysiotherapyBodyComponent } from './physiotherapy-body.component';

describe('PhysiotherapyBodyComponent', () => {
  let component: PhysiotherapyBodyComponent;
  let fixture: ComponentFixture<PhysiotherapyBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysiotherapyBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysiotherapyBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
