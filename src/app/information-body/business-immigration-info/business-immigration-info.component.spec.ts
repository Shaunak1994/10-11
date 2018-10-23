import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessImmigrationInfoComponent } from './business-immigration-info.component';

describe('BusinessImmigrationInfoComponent', () => {
  let component: BusinessImmigrationInfoComponent;
  let fixture: ComponentFixture<BusinessImmigrationInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessImmigrationInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessImmigrationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
