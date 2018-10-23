import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkMyAttendanceComponent } from './mark-my-attendance.component';

describe('MarkMyAttendanceComponent', () => {
  let component: MarkMyAttendanceComponent;
  let fixture: ComponentFixture<MarkMyAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkMyAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkMyAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
