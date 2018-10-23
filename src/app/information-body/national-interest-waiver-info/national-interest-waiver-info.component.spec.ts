import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalInterestWaiverInfoComponent } from './national-interest-waiver-info.component';

describe('NationalInterestWaiverInfoComponent', () => {
  let component: NationalInterestWaiverInfoComponent;
  let fixture: ComponentFixture<NationalInterestWaiverInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalInterestWaiverInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalInterestWaiverInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
