import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersPages } from './orders.page';
import { OrdersService } from '../../services/orders/oders.service';

describe('OrdersPages', () => {
  let component: OrdersPages;
  let fixture: ComponentFixture<OrdersPages>;
  let ordersService: OrdersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
