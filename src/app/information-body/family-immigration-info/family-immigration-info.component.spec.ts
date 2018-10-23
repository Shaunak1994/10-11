import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyImmigrationInfoComponent } from './family-immigration-info.component';

describe('FamilyImmigrationInfoComponent', () => {
  let component: FamilyImmigrationInfoComponent;
  let fixture: ComponentFixture<FamilyImmigrationInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyImmigrationInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyImmigrationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
