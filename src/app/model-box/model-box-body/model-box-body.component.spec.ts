import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelBoxBodyComponent } from './model-box-body.component';

describe('ModelBoxBodyComponent', () => {
  let component: ModelBoxBodyComponent;
  let fixture: ComponentFixture<ModelBoxBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelBoxBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelBoxBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
