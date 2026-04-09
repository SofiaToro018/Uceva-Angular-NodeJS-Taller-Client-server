import { Order } from "../interfaces/ordes.interface";
/**
 * Listado de pedidos de ejemplo para pruebas y desarrollo.
 * Estos datos se utilizan para simular la respuesta de una API o para pruebas unitarias en la aplicación Angular.
 * Cada pedido tiene un id, usuario, producto, total, fecha y rango de precio.
 * 
 * @remarks
 * Este mock de pedidos es útil para el desarrollo de componentes que requieren datos
 * de pedidos sin necesidad de conectarse a una API real, facilitando así el proceso
 * de desarrollo y pruebas.
 * 
 * @type {Order[]}
 * @example
 * ```typescript
 * import { ORDERS_MOCK } from './mocks/orders.mocks';
 * console.log(ORDERS_MOCK);
 * // Output:
 * [
 *  {
 *   id: 1,
 *   user: 'Carlos Ramírez',
 *   product: 'Laptop',
 *   total: 1500000,
 *   date: '2023-10-01',
 *   priceRange: 'high'
 *  }
 * ]
 * ```  
 */

export const ORDERS_MOCK: Order[] = [
    {
        id: 1,
        user: 'Juan Pérez',
        product: 'Leche entera',
        total: 4500,
        date: '2023-10-01',
        priceRange: 'high'
    },
    {
        id: 2,
        user: 'María García',
        product: 'Manzana roja',
        total: 3200,
        date: '2023-10-02',
        priceRange: 'medium'
    }
];
