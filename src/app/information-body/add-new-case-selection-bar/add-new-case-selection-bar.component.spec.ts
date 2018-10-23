import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCaseSelectionBarComponent } from './add-new-case-selection-bar.component';

describe('AddNewCaseSelectionBarComponent', () => {
  let component: AddNewCaseSelectionBarComponent;
  let fixture: ComponentFixture<AddNewCaseSelectionBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewCaseSelectionBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewCaseSelectionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
