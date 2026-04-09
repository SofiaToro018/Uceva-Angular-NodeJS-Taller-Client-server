import { Order } from "../interfaces/ordes.interface";

export const ORDERS_MOCK: Order[] = [
    {
        id: 1,
        user: 'Juan Pérez',
        product: 'Leche entera',
        total: 4500,
        date: '2023-10-01'
    },
    {
        id: 2,
        user: 'María García',
        product: 'Manzana roja',
        total: 3200,
        date: '2023-10-02'
    }
];
