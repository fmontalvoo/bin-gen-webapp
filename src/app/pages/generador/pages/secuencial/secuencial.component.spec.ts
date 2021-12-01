import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuencialComponent } from './secuencial.component';

describe('SecuencialComponent', () => {
  let component: SecuencialComponent;
  let fixture: ComponentFixture<SecuencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuencialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
