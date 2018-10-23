import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingVisaInfoComponent } from './working-visa-info.component';

describe('WorkingVisaInfoComponent', () => {
  let component: WorkingVisaInfoComponent;
  let fixture: ComponentFixture<WorkingVisaInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingVisaInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingVisaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
