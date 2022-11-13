import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-turn',
  templateUrl: './product-turn.component.html',
  styleUrls: ['./product-turn.component.scss']
})
export class ProductTurnComponent implements OnInit {

  constructor(private productService: ProductService) { }

  @Input() products: Product[] = []

  ngOnInit(): void {

  }

}
