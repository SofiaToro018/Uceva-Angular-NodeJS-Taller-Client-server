/**
 * Interfaz para representar una orden en la aplicación. 
 * 
 * Contiene la información necesaria para mostrar una orden 
 * en la tabla de órdenes o en cualquier componente relacionado con las órdenes.
 * 
 * @remarks
 * Cada orden debe tener un `id` único, el `user` que realizó la orden,
 * el `product` que se ordenó, el `total` de la orden en pesos colombianos
 * y la `date` en formato ISO 8601 (YYYY-MM-DD).
 * @example
 * ```ts
 * const orden: Order = {
 *  id: 1,
 * user
 * : 'Juan Pérez',
 * product: 'Leche entera',
 * total: 4500,
 * date: '2024-06-15'
 * };
 * ``` 
 */
export interface Order {
  /** Identificador único de la orden */
  id: number;

  /** Nombre del usuario que realizó la orden */  
  user: string;

  /** Nombre del producto ordenado */
  product: string;

  /** Monto total de la orden en pesos colombianos */
  total: number;

  /** Fecha de la orden en formato ISO 8601 (YYYY-MM-DD) */
  date: string;

  /** Rango de precio de la orden */
  priceRange: OrderPriceRange;
}

 /**
  * Tipo de rango de precio para una orden.
  * 
  * @remarks
  * Este tipo se utiliza para categorizar las órdenes según su monto total:
  * - 'Bajo' para órdenes menores a 5000 pesos
  * - 'Medio' para órdenes entre 5000 y 15000 pesos
  * - 'Alto' para órdenes mayores a 15000 pesos
  * 
  * Se utiliza principalmente para mapear badges de colores en la UI.
  * 
  * @example
  * ```ts
  * const rango: OrderPriceRange = 'medium';
  * * ```
  */
export type OrderPriceRange = 'low' | 'medium' | 'high';
  