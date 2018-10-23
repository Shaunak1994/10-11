import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientprofComponent } from './clientprof.component';

describe('ClientprofComponent', () => {
  let component: ClientprofComponent;
  let fixture: ComponentFixture<ClientprofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientprofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
