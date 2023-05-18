import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FINM350Component } from './finm350.component';

describe('FINM350Component', () => {
  let component: FINM350Component;
  let fixture: ComponentFixture<FINM350Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FINM350Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FINM350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
