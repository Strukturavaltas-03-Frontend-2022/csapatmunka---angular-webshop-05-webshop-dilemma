import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private products = this.productservice.getProducts();
  public productsFeatured = this.products.filter(product => product.featured);
  public productsDiscounted = this.products.filter(product => product.discounted);
  public productsActive = this.products.filter(product => product.active).sort(() => Math.random() - 0.5).slice(0,5);

  constructor(private productservice: ProductService) {}
}
