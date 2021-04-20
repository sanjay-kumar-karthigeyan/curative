import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurserviceBodyComponent } from './ourservice-body.component';

describe('OurserviceBodyComponent', () => {
  let component: OurserviceBodyComponent;
  let fixture: ComponentFixture<OurserviceBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurserviceBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurserviceBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
