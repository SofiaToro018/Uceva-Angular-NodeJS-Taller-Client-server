import { Routes } from '@angular/router';
import { UsersPage } from './pages/users/users.page';
import { ProductsPage } from './pages/products/products.page';
import { OrdersPages } from './pages/orders/orders.page';
import { PaymentsPage } from './pages/payments/payments.pages';
import { CategoriesPage } from './pages/categories.page/categories.page';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Este archivo contiene la configuración de enrutamiento
 * utilizada por Angular Router para mapear las URLs
 * a los componentes correspondientes.
 *
 * Incluye:
 * - Rutas de navegación principales
 * - Redirección por defecto para rutas no existentes
 *
 * @see {@link UsersPage}
 * @see {@link ProductsPage}
 */
export const routes: Routes = [

  /**
   * Ruta de usuarios.
   *
   * @remarks
   * Renderiza el componente `UsersPage`, encargado
   * de mostrar y gestionar el listado de usuarios.
   */
  { path: 'users', component: UsersPage },

  /**
   * Ruta de productos.
   *
   * @remarks
   * Renderiza el componente `ProductsPage`, encargado
   * de mostrar y gestionar el listado de productos.
   */
  { path: 'products', component: ProductsPage },
  /**
   * Ruta de órdenes.
   *
   * @remarks
   * Renderiza el componente `OrdersPage`, encargado
   * de mostrar y gestionar el listado de órdenes.
   */
  { path: 'orders', component: OrdersPages },
  /**
   * Ruta de pagos.
   *
   * @remarks
   * Renderiza el componente `PaymentsPage`, encargado
   * de mostrar y gestionar el listado de pagos.
   */
  { path: 'payments', component: PaymentsPage },
  /**
   * Ruta de categorías.
   *
   * @remarks
   * Renderiza el componente `CategoriesPage`, encargado
   * de mostrar y gestionar el listado de categorías.
   */
  { path: 'categories', component: CategoriesPage },

  /**
   * Ruta comodín.
   *
   * @remarks
   * Captura cualquier ruta no definida y redirige
   * automáticamente a la ruta de usuarios.
   */
  { path: '**', redirectTo: 'users' },
];