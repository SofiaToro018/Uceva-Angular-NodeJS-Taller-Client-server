import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from '../../interfaces/payments.interface';

/**
 * Servicio para obtener pagos desde la API.
 * 
 * Proporciona métodos para interactuar con el backend y obtener
 * información sobre los pagos generados en el sistema.
 * 
 *@example
 * ```ts
 * constructor(private paymentsService: PaymentsService)
 * 
 * this.paymentsService.getAllPayments(5).subscribe(payments => {
 *   console.log(payments);
 * }
 * ´´´´
 */
@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  /** Cliente HTTP de Angular para realizar solicitudes 
   * Se inyecta utilizando la función `inject` 
  **/
  private httpClient = inject(HttpClient);


  /**
   * Obtiene un listado de pagos desde la API.
   *
   * @param countPayments Cantidad de pagos a obtener
   * @returns Observable con el arreglo de pagos
   *
   * @example
   * ```ts
   * this.paymentsService.getAllPayments(10).subscribe(payments => ...);
   * ```
   */
  getAllPayments(countPayments: number): Observable<Payment[]> {
    return this.httpClient.get<Payment[]>(`api/payments/${countPayments}`);
  }
}