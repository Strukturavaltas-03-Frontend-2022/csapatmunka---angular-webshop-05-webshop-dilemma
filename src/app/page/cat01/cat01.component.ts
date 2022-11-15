import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component {
  private categoryId = 1;
  private products = this.productservice.getProducts();
  public productsFeatured = this.products.filter(product=> product.catId === this.categoryId && product.featured);
  public productsActive = this.products.filter(product=> product.catId === this.categoryId);

  constructor(private productservice: ProductService) {}
}
