import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdersPages } from './orders.page';
import { provideHttpClient } from '@angular/common/http';
import { OrdersService } from '../../services/orders/oders.service';
import { OrdersTableComponent } from '../../components/orders-table/orders-table.component';
import { of, throwError } from 'rxjs';
import { ORDERS_MOCK } from '../../mocks/orders.mocks';
import { By } from '@angular/platform-browser';

describe('OrdersPages', () => {
  let component: OrdersPages;
  let fixture: ComponentFixture<OrdersPages>;
  let ordersService: OrdersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersPages, OrdersTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersPages);
    component = fixture.componentInstance;
    ordersService = TestBed.inject(OrdersService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllOrders al iniciar', () => {
    const spyGetAllOrders = jest.spyOn(ordersService, 'getAllOrders').mockReturnValue(of(ORDERS_MOCK));
    fixture.detectChanges();
    expect(spyGetAllOrders).toHaveBeenCalled();
  });

  it('debería asignar las órdenes recibidas del servicio', () => {
    jest.spyOn(ordersService, 'getAllOrders').mockReturnValue(of(ORDERS_MOCK));
    fixture.detectChanges();
    expect(component.orders).toEqual(ORDERS_MOCK);
  });

  it('debería pasar las órdenes al componente orders-table', () => {
    jest.spyOn(ordersService, 'getAllOrders').mockReturnValue(of(ORDERS_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(OrdersTableComponent))
      .componentInstance;
    expect(tableComponent.orders).toEqual(ORDERS_MOCK);
  });

  it('debería manejar el error cuando falla getAllOrders', () => {
    component.orders = [];
    const errorResponse = new Error('Error al cargar las órdenes');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(ordersService, 'getAllOrders').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(ordersService.getAllOrders).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith('Error al cargar las órdenes:', errorResponse);
    expect(component.orders.length).toBe(0);
  });
});