import { faker } from '@faker-js/faker';
import { Payment, PaymentStatus } from '../../../domain/interfaces/payment.interface';

/**
 * Servicio encargado de la generación y gestión de pagos.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar pagos
 * ficticios, principalmente con fines de prueba o demostración.
 */
export class PaymentsService {

  /**
   * Métodos de pago disponibles.
   */
  private methods: string[] = ['Tarjeta', 'Efectivo', 'Transferencia'];

  /**
   * Estados posibles de pago.
   */
  private statusList: PaymentStatus[] = ['pending', 'completed', 'cancelled'];

  /**
   * Obtiene un listado de pagos generados dinámicamente.
   *
   * @param countPayments Cantidad de pagos a generar
   * @returns Promesa que resuelve un arreglo de pagos
   */
  public async getAllPayments(countPayments: number): Promise<Payment[]> {
    const payments: Promise<Payment>[] = [];

    for (let i = 1; i <= countPayments; i++) {
      payments.push(this.generatePayment(i));
    }

    return Promise.all(payments);
  }

  /**
   * Genera un pago ficticio.
   *
   * @param id Identificador único del pago
   * @returns Promesa que resuelve un pago generado
   */
  private generatePayment(id: number): Promise<Payment> {
    return Promise.resolve({
      id,
      method: faker.helpers.arrayElement(this.methods),
      amount: Number(faker.commerce.price({ min: 10, max: 500 })),
      status: faker.helpers.arrayElement(this.statusList),
    });
  }
}