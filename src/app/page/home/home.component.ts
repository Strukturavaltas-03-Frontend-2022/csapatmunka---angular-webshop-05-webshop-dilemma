import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private productservice: ProductService) { }

  productsFeatured = this.productservice.getProducts().filter(product=> product.featured === true).sort(() => Math.random() - 0.5);

  productsActive = this.productservice.getProducts().filter(product=> product.active === true).sort(() => Math.random() - 0.5);

  ngOnInit(): void {
  }

}
