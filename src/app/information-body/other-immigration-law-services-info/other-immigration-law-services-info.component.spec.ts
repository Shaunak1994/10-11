import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherImmigrationLawServicesInfoComponent } from './other-immigration-law-services-info.component';

describe('OtherImmigrationLawServicesInfoComponent', () => {
  let component: OtherImmigrationLawServicesInfoComponent;
  let fixture: ComponentFixture<OtherImmigrationLawServicesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherImmigrationLawServicesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherImmigrationLawServicesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
