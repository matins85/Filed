import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Middle4Component } from './middle4.component';

describe('Middle4Component', () => {
  let component: Middle4Component;
  let fixture: ComponentFixture<Middle4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Middle4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Middle4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
