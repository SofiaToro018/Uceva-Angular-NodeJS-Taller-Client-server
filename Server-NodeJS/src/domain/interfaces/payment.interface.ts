/**
 * Interfaz para representar un pago en el sistema.
 * Contiene información relevante sobre el método de pago, el monto y el estado.
 * 
 * @remarks
 * Esta interfaz se utiliza para definir la estructura de los objetos de pago
 * que se manejan en el sistema, facilitando la gestión y validación de los datos relacionados con los pagos.
 * 
 * @example
 * ```ts
 * const payment: Payment = {
 *   id: 1,
 *   method: "Credit Card",
 *  amount: 100.00,
 *  status: "Completed"
 * };
 */
export interface Payment {
  /* Identificador único del pago. */
  id: number;

  /* Método de pago utilizado (e.g., "Credit Card", "PayPal"). */
  method: string;

  /* Monto total del pago. */
  amount: number;

  /* Estado actual del pago. */
  status: PaymentStatus;
}
/**
 * Tipo de estado de pago.
 * Define los posibles estados que un pago puede tener en el sistema.
 * 
 * @remarks
 * 
 * Los estados de pago permiten controlar
 * el flujo de las transacciones y tomar decisiones basadas en el estado actual del pago.
 * - 'pending': El pago está pendiente de ser procesado.
 * - 'completed': El pago ha sido completado exitosamente.
 * - 'cancelled': El pago ha sido cancelado.
 * 
 * @example
 * ```ts
 * const paymentStatus: PaymentStatus = 'completed';
 * ```
 */
export type PaymentStatus = 'pending' | 'completed' | 'cancelled';