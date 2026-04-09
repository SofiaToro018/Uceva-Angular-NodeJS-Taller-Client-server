/**
 * Interfaz que representa una categoría de producto.
 * 
 * Contiene la información básica necesaria para mostrar una categoría
 * en la tabla o en cualquier componente de listado.
 * 
 * @remarks
 * Cada categoría debe tener un `id` único, un `name` que representa el nombre de la categoría,
 * y una `description` que representa una breve descripción de la categoría.
 * 
 * @example
 * ```ts
 * const categoria: Category = {
 *  id: 1,
 * name: 'Lacteos',
 * description: 'Productos derivados de la leche'
 * };
 * 
 */

export interface Category {
  /** Identificador único de la categoría */
  id: number;

  /** Nombre de la categoría */
  name: string;

  /** Descripción de la categoría */
  description: string;
}