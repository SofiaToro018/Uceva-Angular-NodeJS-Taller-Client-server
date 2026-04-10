import { Payment } from "../interfaces/payments.interface";
/**
 * Listado de pagos de ejemplo para pruebas y desarrollo.
 * Estos datos se utilizan para simular la respuesta de una API o para pruebas unitarias en la aplicación Angular.
 * Cada pago tiene un id, método, monto y estado.
 * 
 * @remarks
 * Este mock de pagos es útil para el desarrollo de componentes que requieren datos
 * de pagos sin necesidad de conectarse a una API real, facilitando así el proceso
 * de desarrollo y pruebas.
 * 
 * @type {Payment[]}
 * @example
 * ```typescript
 * import { PAYMENTS_MOCK } from './mocks/payments.mocks';
 * console.log(PAYMENTS_MOCK);
 * // Output:
 * [
 *  {
 *   id: 1,
 *   method: 'Tarjeta',
 *   amount: 2500,
 *   status: 'completed'
 *  }
 * ]
 * ```  
 */
export const PAYMENTS_MOCK: Payment[] = [
    {
        id: 1,
        method: 'Tarjeta',
        amount: 2500,
        status: 'completed'
    },
    {
        id: 2,
        method: 'Efectivo',
        amount: 150,
        status: 'pending'
    },
    {
        id: 3,
        method: 'Transferencia',
        amount: 450,
        status: 'cancelled'
    }
];