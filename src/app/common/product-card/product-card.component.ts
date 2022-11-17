import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product = new Product();
  @Input() cssClasses: { [key: string]: any } = {};

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  openDetail() {
    this.router.navigate(['/products', this.product.id]);
  }
}
