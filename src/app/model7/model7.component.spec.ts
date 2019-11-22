import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Model7Component } from './model7.component';

describe('Model7Component', () => {
  let component: Model7Component;
  let fixture: ComponentFixture<Model7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Model7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Model7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
