import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFooterBodyComponent } from './page-footer-body.component';

describe('PageFooterBodyComponent', () => {
  let component: PageFooterBodyComponent;
  let fixture: ComponentFixture<PageFooterBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFooterBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFooterBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
