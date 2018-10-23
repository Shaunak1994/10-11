import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInfoBarComponent } from './client-info-bar.component';

describe('ClientInfoBarComponent', () => {
  let component: ClientInfoBarComponent;
  let fixture: ComponentFixture<ClientInfoBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientInfoBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientInfoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
