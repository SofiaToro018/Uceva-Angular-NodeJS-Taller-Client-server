import { Category } from "../interfaces/category.interface";
/**
 * Listado de categorías de ejemplo para pruebas y desarrollo.
 * Estos datos se utilizan para simular la respuesta de una API o para pruebas unitarias en la aplicación Angular.
 * Cada categoría tiene un id, nombre y descripción.
 * 
 * @remarks
 * Este mock de categorías es útil para el desarrollo de componentes que requieren datos
 * de categorías sin necesidad de conectarse a una API real, facilitando así el proceso
 * de desarrollo y pruebas.
 * 
 * @type {Category[]}
 * @example
 * ```typescript
 * import { CATEGORIES_MOCK } from './mocks/categories.mocks';
 * console.log(CATEGORIES_MOCK);
 * // Output:
 * [
 *  {
 *   id: 1,
 *   name: 'Lacteos',
 *   description: 'Productos lácteos'
 *  }
 * ]
 * ```  
 */
export const CATEGORIES_MOCK: Category[] = [
    {
        id: 1,
        name: 'Lacteos',
        description: 'Productos lácteos'
    },
    {
        id: 2,
        name: 'Frutas',
        description: 'Frutas frescas y naturales'
    }
];