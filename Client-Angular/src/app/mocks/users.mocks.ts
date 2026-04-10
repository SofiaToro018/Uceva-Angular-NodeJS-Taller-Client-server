import { User } from "../interfaces/users.interface";
/**
 * Listado de usuarios de ejemplo para pruebas y desarrollo.
 * Estos datos se utilizan para simular la respuesta de una API o para pruebas unitarias en la aplicación Angular.
 * Cada usuario tiene un id, nombre, apellido, edad, correo electrónico y carrera de ingeniería.
 * La carrera de ingeniería es de tipo `UserEngineering`, que se define en la interfaz correspondiente.
 * 
 * @remarks
 * Este mock de usuarios es útil para el desarrollo de componentes que requieren datos
 * de usuarios sin necesidad de conectarse a una API real, facilitando así el proceso
 * de desarrollo y pruebas.
 * 
 * @type {User[]}
 * @example
 * ```typescript
 * import { USERS_MOCK } from './mocks/users.mocks';
 * console.log(USERS_MOCK);
 * // Output:
 * [
 *  {
 *   id: 1,
 *  name: 'Carlos',
 *  lastName: 'Ramírez',
 *  age: 22,
 *  email: 'carlos.ramirez@example.com',
 *  engineering: 'Sistemas'
 * }
 * ]
 * ```
 */
export const USERS_MOCK: User[] = [
    {
        id: 1,
        name: 'Carlos',
        lastName: 'Ramírez',
        age: 22,
        email: 'carlos.ramirez@example.com',
        engineering: 'Sistemas',
    },
    {
        id: 2,
        name: 'Ana',
        lastName: 'Gómez',
        age: 24,
        email: 'ana.gomez@example.com',
        engineering: 'Industrial',
    }
];