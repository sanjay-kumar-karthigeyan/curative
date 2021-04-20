import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporatewellnessBodyComponent } from './corporatewellness-body.component';

describe('CorporatewellnessBodyComponent', () => {
  let component: CorporatewellnessBodyComponent;
  let fixture: ComponentFixture<CorporatewellnessBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporatewellnessBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporatewellnessBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
