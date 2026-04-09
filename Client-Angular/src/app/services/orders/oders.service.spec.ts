import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Order } from '../../interfaces/ordes.interface';
import { OrdersService } from './oders.service';

describe('OrdersService', () => {
  let service: OrdersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });

    service = TestBed.inject(OrdersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('Creación del servicio', () => {
    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('getAllOrders', () => {

    it('debería realizar una petición GET y retornar una lista de órdenes', () => {
      const countOrders = 5;

      const mockOrders: Order[] = [
        {
          id: 1,
          user: 'Juan Pérez',
          product: 'Laptop',
          total: 2000,
          date: new Date().toISOString()
        }
      ];

      service.getAllOrders(countOrders).subscribe((orders) => {
        expect(orders).toEqual(mockOrders);
      });

      const req = httpMock.expectOne(`api/orders/${countOrders}`);
      expect(req.request.method).toBe('GET');

      req.flush(mockOrders);
    });

    it('debería propagar un error si la petición HTTP falla', () => {
      const countOrders = 3;

      service.getAllOrders(countOrders).subscribe({
        next: () => fail('No debería emitir datos'),
        error: (error) => {
          expect(error.status).toBe(500);
        },
      });

      const req = httpMock.expectOne(`api/orders/${countOrders}`);

      req.flush(
        { message: 'Error interno' },
        { status: 500, statusText: 'Internal Server Error' }
      );
    });

  });
});