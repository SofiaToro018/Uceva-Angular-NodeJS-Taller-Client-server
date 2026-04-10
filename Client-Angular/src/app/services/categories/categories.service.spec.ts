import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesService} from './categories.service';

describe('CategoriesService', () => {
  let component: CategoriesService;
  let fixture: ComponentFixture<CategoriesService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
