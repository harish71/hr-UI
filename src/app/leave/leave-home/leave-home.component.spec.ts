import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveHomeComponent } from './leave-home.component';

describe('LeaveHomeComponent', () => {
  let component: LeaveHomeComponent;
  let fixture: ComponentFixture<LeaveHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
