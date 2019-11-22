import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Model9Component } from './model9.component';

describe('Model9Component', () => {
  let component: Model9Component;
  let fixture: ComponentFixture<Model9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Model9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Model9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
