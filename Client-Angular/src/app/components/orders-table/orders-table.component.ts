import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Order } from '../../interfaces/ordes.interface';
/**
 * Componente de tabla de pedidos.
 * 
 * Se utiliza para mostrar un listado de pedidos en una tabla, 
 * mostrando información como el ID del pedido,
 * el nombre del cliente, la fecha del pedido y el estado del pedido.
 * 
 * @remarks
 * Este componente recibe los pedidos desde un componente 
 * padre a través del Input `orders` y utiliza el mapeo `statusMap`
 * 
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 * 
 * @example
 * ```html
 * <app-orders-table [orders]="orders"></app-orders-table>
 * ```
 */
@Component({
  selector: 'app-orders-table',
  imports: [CommonModule],
  templateUrl: './orders-table.component.html',
  
})
export class OrdersTableComponent {
  /**
   * Listado de pedidos que se mostrarán en la tabla.
   * @type {Order[]}
   * 
   * @remarks
   * Este Input permite pasar un array de pedidos desde un componente padre,
   * generalmente `OrdersPagesComponent`. Cada pedido debe cumplir la interfaz `Order`.
   */
  @Input() orders: Order[] = [];
  /**
   * Mapeo de los precios de pedidos a tipos de Badge.
   * @type {Record<string, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada pedido según su precio total:
   * - Total < 3000 → 'success' (verde)
   * - 3000 ≤ Total < 5000 → 'warning' (amarillo)
   * - Total ≥ 5000 → 'danger' (rojo)
   * Esto permite que en la tabla cada pedido tenga un badge visual que indique su rango de precio
   * de forma clara para el usuario.
   * 
   */
  statusMap: Record<string, BadgeType> = {
    'low': 'success',
    'medium': 'warning',
    'high': 'danger'
  }
   

}
