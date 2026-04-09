import { Router } from "express";
import { PaymentsController } from "./payments.controller";

export class PaymentsRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new PaymentsController();

    /**
     * @openapi
     * /api/payments/{countPayments}:
     *   get:
     *     summary: Obtener listado de pagos
     *     description: Retorna una lista de pagos generados dinámicamente.
     *     tags:
     *       - Payments
     *     parameters:
     *       - in: path
     *         name: countPayments
     *         required: true
     *         schema:
     *           type: integer
     *           example: 5
     *     responses:
     *       200:
     *         description: Lista de pagos generados
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Payment'
     */
    router.get("/:countPayments", controller.getAllPayments);

    return router;
  }
}