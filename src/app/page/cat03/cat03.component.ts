import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat03',
  templateUrl: './cat03.component.html',
  styleUrls: ['./cat03.component.scss']
})
export class Cat03Component implements OnInit {

  categoryId = 3

  constructor(private productservice: ProductService) { }

  productsFeatured = this.productservice.getProducts().filter(product=> product.catId === this.categoryId && product.featured === true).sort(() => Math.random() - 0.5).slice(0,5);

  productsActive = this.productservice.getProducts().filter(product=> product.catId === this.categoryId)


  ngOnInit(): void {
  }

}
