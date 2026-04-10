/**
 * Interfaz para representar una categoría en la aplicación.
 *
 * Contiene la información necesaria para mostrar una categoría
 * en la tabla de categorías o en cualquier componente relacionado con las categorías.
 *
 * @remarks
 * Cada categoría debe tener un `id` único, el `name` que la identifica,
 * y la `description` que la describe.
 * @example
 * ```ts
 * const categoria: Category = {
 *  id: 1,
 * name: 'Lácteos',
 * description: 'Productos lácteos'
 * };
 * ``` 
 */
export interface Category {
    /** Identificador único de la categoría */
    id: number;

    /** Nombre de la categoría */
    name: string;

    /** Descripción de la categoría */
    description: string;
}