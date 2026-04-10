import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsPages } from './payments.pages';

describe('PaymentsPages', () => {
  let component: PaymentsPages;
  let fixture: ComponentFixture<PaymentsPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentsPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
