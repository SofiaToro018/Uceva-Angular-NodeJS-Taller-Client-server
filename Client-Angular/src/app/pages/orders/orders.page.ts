import { Component, inject } from '@angular/core';
import { Order } from '../../interfaces/ordes.interface';
import { State } from '../../interfaces/state.interface';
import { OrdersService } from '../../services/orders/oders.service';
/**
 * Componente contenedor de órdenes.
 * 
 * Se utiliza para gestionar y mostrar un listado de órdenes.
 * utilizando el componente `OrdersTableComponent`.
 * 
 * @remarks
 * Este componente se encarga de consumir el servicio `OrdersService`
 * para obtener las órdenes y pasarlas al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 * 
 */
@Component({
  selector: 'app-orders.pages',
  imports: [],
  templateUrl: './orders.pages.html',
  styleUrl: './orders.pages.scss',
})
export class OrdersPages {
  /**
   * Listado de órdenes obtenidos desde el servicio.
   * @type {Order[]}
   */
  orders: Order[] = [];
   /**
    * Estado actual del componente.
    *
    * @default 'init'
    */
   state: State = 'init';
  
   /**
    * Servicio para obtener órdenes.
    * @remarks
    * Se inyecta utilizando la función `inject()` de Angular.
    */
    private ordersService = inject(OrdersService);
  /**
   * Inicializa el componente y carga las órdenes.
   * @remarks
   * Se suscribe al método `getAllOrders()` del servicio y
   * asigna los datos recibidos a la propiedad `orders`.
   */ 
  ngOnInit(): void {
    this.state = 'loading';
    this.ordersService.getAllOrders(5).subscribe({
      next: (orders) => {
        this.orders = orders;
        this.state = 'success';
      },
      error: (error) => {
        console.error('Error al cargar las órdenes:', error);
        this.state = 'error';
      }
    });
  }
}
