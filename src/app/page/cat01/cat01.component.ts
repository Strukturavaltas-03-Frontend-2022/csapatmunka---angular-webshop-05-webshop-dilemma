import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {

  categoryId = 1

  constructor(private productservice: ProductService) { }

  productsFeatured = this.productservice.getProducts().filter(product=> product.catId === this.categoryId && product.featured === true).sort(() => Math.random() - 0.5).slice(0,5);
  
  productsActive = this.productservice.getProducts().filter(product=> product.catId === this.categoryId)

  ngOnInit(): void {
  }

}
