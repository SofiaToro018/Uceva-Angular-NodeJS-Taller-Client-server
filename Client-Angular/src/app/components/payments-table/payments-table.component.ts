import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Payment, PaymentStatus } from '../../interfaces/payments.interface';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';

/**
 * Componente de tabla de pagos.
 *
 * Se utiliza para mostrar un listado de pagos en una tabla,
 * mostrando información como el ID, método, monto y estado del pago.
 *
 * @remarks
 * Este componente recibe los pagos desde un componente
 * padre a través del Input `payments` y utiliza el mapeo `statusMap`
 * para asignar colores a cada estado.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-payments-table [payments]="payments"></app-payments-table>
 * ```
 */
@Component({
  selector: 'app-payments-table',
  imports: [CommonModule, BadgeAtom],
  templateUrl: './payments-table.component.html',
})
export class PaymentsTableComponent {

  /**
   * Listado de pagos que se mostrarán en la tabla.
   * @type {Payment[]}
   *
   * @remarks
   * Este Input permite pasar un array de pagos desde un componente padre,
   * generalmente `PaymentsPageComponent`. Cada pago debe cumplir la interfaz `Payment`.
   */
  @Input() payments: Payment[] = [];

  /**
   * Mapeo de estados de pago a tipos de Badge.
   * @type {Record<PaymentStatus, BadgeType>}
   *
   * @remarks
   * Se utiliza para asignar colores de badges a cada pago según su estado:
   * - 'pending'   → 'warning'  (amarillo)
   * - 'completed' → 'success'  (verde)
   * - 'cancelled' → 'danger'   (rojo)
   */
  statusMap: Record<PaymentStatus, BadgeType> = {
    'pending': 'warning',
    'completed': 'success',
    'cancelled': 'danger'
  };
}