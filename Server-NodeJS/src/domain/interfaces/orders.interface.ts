/**
 * Interfaz que representa una orden de compra.
 * 
 * Contiene la información básica necesaria para mostrar una orden
 * en la tabla o en cualquier componente de listado.
 * 
 * @remarks
 * Cada orden debe tener un `id` único, un `user` que representa el nombre del cliente,
 * un `product` que representa el nombre del producto comprado, un `total` que representa el monto total de la orden en pesos colombianos, y una `date` que representa la fecha de la orden.
 * 
 * @example
 * ```ts
 * const orden: Order = {
 *   id: 1,
 *   user: 'Juan Pérez',
 *   product: 'Leche entera',
 *   total: 4500,
 *   date: new Date()
 *   priceRange: 'high'
 *   
 * };
 * ```

 */

export interface Order {
  /** Identificador único de la orden */
  id: number;

  /** Nombre del cliente que realizó la orden */
  user: string;

  /** Nombre del producto comprado */
  product: string;

  /** Monto total de la orden en pesos colombianos */
  total: number;

  /** Fecha de la orden */
  date: Date;
  
  /** Rango de precio de la orden */
  priceRange: OrderPriceRange;
}

/**
 * Tipo de rango de precio de una orden.
 *
 * @remarks
 * Este tipo restringe los rangos a los valores predefinidos:
 * - 'low'    → total < 100
 * - 'medium' → total entre 100 y 300
 * - 'high'   → total > 300
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const rango: OrderPriceRange = 'high';
 * ```
 */
export type OrderPriceRange = 'low' | 'medium' | 'high';


