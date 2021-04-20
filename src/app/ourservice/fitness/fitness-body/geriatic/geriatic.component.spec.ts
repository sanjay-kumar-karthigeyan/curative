import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeriaticComponent } from './geriatic.component';

describe('GeriaticComponent', () => {
  let component: GeriaticComponent;
  let fixture: ComponentFixture<GeriaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeriaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeriaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
