import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmexComponent } from './amex.component';

describe('AmexComponent', () => {
  let component: AmexComponent;
  let fixture: ComponentFixture<AmexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
