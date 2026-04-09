import { faker } from '@faker-js/faker';
import { Order, OrderPriceRange } from '../../../domain/interfaces/orders.interface';

/**
 * Servicio encargado de la generación y gestión de órdenes.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar órdenes
 * ficticias, principalmente con fines de prueba o demostración.
 */
export class OrdersService {

  /**
   * Obtiene un listado de órdenes generadas dinámicamente.
   *
   * @param countOrders Cantidad de órdenes a generar
   * @returns Promesa que resuelve un arreglo de órdenes
   *
   * @example
   * ```ts
   * const orders = await ordersService.getAllOrders(10);
   * ```
   */
  public async getAllOrders(countOrders: number): Promise<Order[]> {
    const orders: Promise<Order>[] = [];

    for (let i = 1; i <= countOrders; i++) {
      orders.push(this.generateOrder(i));
    }

    return Promise.all(orders);
  }

  /**
   * Genera una orden ficticia.
   *
   * @param id Identificador único de la orden
   * @returns Promesa que resuelve una orden generada
   * 
   */
private generateOrder(id: number): Promise<Order> {
  const total = Number(faker.commerce.price({ min: 10, max: 500, dec: 2 }));

  return Promise.resolve({
    id,
    user: faker.person.fullName(),
    product: faker.commerce.productName(),
    total,
    date: faker.date.recent(),
    priceRange: this.getPriceRange(total), 
  });
}

private getPriceRange(total: number): OrderPriceRange {
  if (total < 100) return 'low';
  if (total <= 300) return 'medium';
  return 'high';
 } 
}