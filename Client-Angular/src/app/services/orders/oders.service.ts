import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Order } from '../../interfaces/ordes.interface';
import { Observable } from 'rxjs';

/**
 * Servicio para manejar las operaciones relacionadas con las órdenes.
 * 
 * Este servicio se encarga de realizar las solicitudes HTTP necesarias para
 * obtener las órdenes desde el backend. Actualmente, solo tiene un método para
 * obtener un número específico de órdenes, pero se puede extender fácilmente
 * para incluir otras operaciones como crear, actualizar o eliminar órdenes.
 * 
 * @remarks
 * El método `getOrders` acepta un parámetro `count` que indica cuántas órdenes se deben obtener.
 * La respuesta se espera que sea un arreglo de objetos que cumplen con la interfaz `Order`.
 * 
 * @example
 * ```ts
 * this.ordersService.getOrders(10).subscribe(orders => {
 *   console.log(orders);
 * });
 * ```
 */

@Injectable({
  providedIn: 'root',
})
export class OrdersService {

  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de órdenes desde el backend.
   *
   * @param countOrders Número de órdenes a obtener.
   * @returns Observable que emite un array de órdenes.
   */
  getAllOrders(countOrders: number): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`api/orders/${countOrders}`);
  }
}