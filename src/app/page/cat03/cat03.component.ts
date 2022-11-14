import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat03',
  templateUrl: './cat03.component.html',
  styleUrls: ['./cat03.component.scss']
})
export class Cat03Component {
  private categoryId = 3;
  private products = this.productservice.getProducts();
  public productsFeatured = this.products.filter(product=> product.catId === this.categoryId && product.featured);
  public productsActive = this.products.filter(product=> product.catId === this.categoryId)

  constructor(private productservice: ProductService) {}
}
