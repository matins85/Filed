import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Middle3Component } from './middle3.component';

describe('Middle3Component', () => {
  let component: Middle3Component;
  let fixture: ComponentFixture<Middle3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Middle3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Middle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
