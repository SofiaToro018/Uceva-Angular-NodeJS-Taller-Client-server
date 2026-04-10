import { Component, inject } from '@angular/core';
import { Category } from '../../interfaces/category.interface';
import { State } from '../../interfaces/state.interface';
import { CategoriesService } from '../../services/categories/categories.service';
import { AlertComponent } from '../../components/alert/alert.component';
import { CategoriesTableComponent } from '../../components/categories-table/categories-table.component';

/**
 * Componente contenedor de categorías.
 *
 * Se utiliza para gestionar y mostrar un listado de categorías
 * utilizando el componente `CategoriesTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `CategoriesService`
 * para obtener las categorías y pasarlas al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 */
@Component({
  selector: 'app-categories-page',
  imports: [AlertComponent, CategoriesTableComponent],
  templateUrl: './categories.page.html',
})
export class CategoriesPage {

  /**
   * Listado de categorías obtenidas desde el servicio.
   * @type {Category[]}
   */
  categories: Category[] = [];

  /**
   * Estado actual del componente.
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Servicio para obtener categorías.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private categoriesService = inject(CategoriesService);

  /**
   * Inicializa el componente y carga las categorías.
   * @remarks
   * Se suscribe al método `getAllCategories()` del servicio y
   * asigna los datos recibidos a la propiedad `categories`.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.categoriesService.getAllCategories(10).subscribe({
      next: (categories) => {
        this.categories = categories;
        this.state = 'success';
      },
      error: (error) => {
        console.error('Error al cargar las categorías:', error);
        this.state = 'error';
      }
    });
  }
}