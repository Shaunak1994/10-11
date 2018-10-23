import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenshipInfoComponent } from './citizenship-info.component';

describe('CitizenshipInfoComponent', () => {
  let component: CitizenshipInfoComponent;
  let fixture: ComponentFixture<CitizenshipInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenshipInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenshipInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
