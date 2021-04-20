import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabilationBodyComponent } from './rehabilation-body.component';

describe('RehabilationBodyComponent', () => {
  let component: RehabilationBodyComponent;
  let fixture: ComponentFixture<RehabilationBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RehabilationBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RehabilationBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
