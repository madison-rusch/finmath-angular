import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FINM367Component } from './finm367.component';

describe('FINM367Component', () => {
  let component: FINM367Component;
  let fixture: ComponentFixture<FINM367Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FINM367Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FINM367Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
