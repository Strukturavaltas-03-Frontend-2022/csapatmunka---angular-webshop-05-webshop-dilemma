import { Component } from '@angular/core';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { ProductHandlerService } from 'src/app/service/product-handler.service';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  public product: Product | undefined;
  public category: string = '';
  private categories: Category[];

  constructor(
    private productSvc: ProductHandlerService,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private location: Location,
  ) {
    const productId: number = this.activatedRoute.snapshot.params['id'];
    this.categories = this.categoryService.getAll();
    this.productSvc.getProductById(productId).subscribe((product) => {
      this.product = product;
      this.category = this.categories.filter(cat => cat.id === Number(product.catId))[0].name;
    });
  }

  backTo() {
    this.location.back();
  }
}
