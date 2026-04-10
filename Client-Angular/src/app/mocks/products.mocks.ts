import { Product } from "../interfaces/products.interface";
/**
 * Listado de productos de ejemplo para pruebas y desarrollo.
 * Estos datos se utilizan para simular la respuesta de una API o para pruebas unitarias en la aplicación Angular.
 * Cada producto tiene un id, nombre, categoría y precio.
 * La categoría es de tipo `ProductCategory`, que se define en la interfaz correspondiente.
 * @remarks
 * Este mock de productos es útil para el desarrollo de componentes que requieren datos
 *  de productos sin necesidad de conectarse a una API real, facilitando así el proceso 
 * de desarrollo y pruebas.
 * 
 * @type {Product[]}
 * @example
 * ```typescript
 * import { PRODUCTS_MOCK } from './mocks/products.mocks';
 * console.log(PRODUCTS_MOCK);
 * // Output:
 * [
 *   {
 *     id: 1,
 *    name: 'Leche entera',
 *    category: 'Lacteos',
 *    price: 4500,
 *  },
 * {
 *    id: 2,
 *   name: 'Manzana roja',
 *   
 *  category: 'Frutas',
 *  price: 3200,
 * },
 * 
 * ]
 * ```
 * 
 */
export const PRODUCTS_MOCK: Product[] = [
    {
        id: 1,
        name: 'Leche entera',
        category: 'Lacteos',
        price: 4500,
    },
    {
        id: 2,
        name: 'Manzana roja',
        category: 'Frutas',
        price: 3200,
    }
];