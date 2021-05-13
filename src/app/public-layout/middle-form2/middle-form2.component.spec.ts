import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleForm2Component } from './middle-form2.component';

describe('MiddleForm2Component', () => {
  let component: MiddleForm2Component;
  let fixture: ComponentFixture<MiddleForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleForm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
