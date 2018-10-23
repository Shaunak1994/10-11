import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesViewComponent } from './cases-view.component';

describe('CasesViewComponent', () => {
  let component: CasesViewComponent;
  let fixture: ComponentFixture<CasesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
