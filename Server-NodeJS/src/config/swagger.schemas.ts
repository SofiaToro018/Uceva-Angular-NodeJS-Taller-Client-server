/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       description: Representa un usuario del sistema
 *       required:
 *         - id
 *         - name
 *         - lastName
 *         - age
 *         - email
 *         - engineering
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Carlos
 *         lastName:
 *           type: string
 *           example: Ramírez
 *         age:
 *           type: number
 *           example: 22
 *         email:
 *           type: string
 *           format: email
 *           example: carlos.ramirez@example.com
 *         engineering:
 *           type: string
 *           enum:
 *             - Sistemas
 *             - Electronica
 *             - Biomedica
 *             - Industrial
 *             - Ambiental
 *           example: Sistemas
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       description: Representa un producto del sistema
 *       required:
 *         - id
 *         - name
 *         - category
 *         - price
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Leche entera
 *         category:
 *           type: string
 *           enum:
 *             - Lacteos
 *             - Carnes
 *             - Frutas
 *             - Verduras
 *           example: Lacteos
 *         price:
 *           type: number
 *           example: 4500
 * @openapi
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       description: Representa una orden del sistema
 *       required:
 *         - id
 *         - user
 *         - product
 *         - total
 *         - date
 *         - priceRange
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         user:
 *           type: string
 *           example: Juan Pérez
 *         product:
 *           type: string
 *           example: Laptop Gamer
 *         total:
 *           type: number
 *           example: 2500
 *         date:
 *           type: string
 *           format: date-time
 *           example: 2026-04-08T10:30:00Z
 *         priceRange:
 *           type: string
 *           enum:
 *             - low
 *             - medium
 *             - high
 *           example: high
 *
 * @openapi
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       description: Representa una categoría de productos
 *       required:
 *         - id
 *         - name
 *         - description
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Lacteos
 *         description:
 *           type: string
 *           example: Productos lácteos
 * @openapi
 * components:
 *   schemas:
 *    Payment:
 *      type: object
 *      description: Representa un pago en el sistema
 *      required:
 *        - id
 *        - method
 *        - amount
 *        - status
 *      properties:
 *        id:
 *         type: number
 *         example: 1
 *        method:
 *         type: string
 *         example: Tarjeta de crédito
 *        amount:
 *         type: number
 *         example: 2500
 *        status:
 *         type: string
 *         enum:
 *           - pending
 *           - completed
 *           - cancelled
 *         example: Completado
 */
export {};