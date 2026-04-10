/**
 * Representa un pago del sistema.
 *
 * @remarks
 * Esta interfaz define la estructura de un pago generado por el servicio.
 * Se utiliza tanto en el frontend como en el backend.
 */
export interface Payment {
    /** Identificador único del pago */
    id: number;

    /** Método de pago utilizado */
    method: string;

    /** Monto del pago */
    amount: number;

    /** Estado del pago */
    status: PaymentStatus;
}

/**
 * Tipo de estado de un pago.
 *
 * @remarks
 * Este tipo restringe los estados a los valores predefinidos:
 * - 'pending'   → pago pendiente
 * - 'completed' → pago completado
 * - 'cancelled' → pago cancelado
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const estado: PaymentStatus = 'completed';
 * ```
 */
export type PaymentStatus = 'pending' | 'completed' | 'cancelled';