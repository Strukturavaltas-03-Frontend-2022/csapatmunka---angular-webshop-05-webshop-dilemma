import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component {
  private categoryId = 2;
  private products = this.productservice.getProducts();
  public productsFeatured = this.products.filter(product=> product.catId === this.categoryId && product.featured);
  public productsActive = this.products.filter(product=> product.catId === this.categoryId)

  constructor(private productservice: ProductService) {}
}
