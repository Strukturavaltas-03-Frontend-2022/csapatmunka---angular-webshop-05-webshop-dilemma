import { Component } from '@angular/core';
import { ProductHandlerService } from 'src/app/product-handler.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component {
  private categoryId = 2;

  public productsFeatured$ = this.productSvc.featured(this.categoryId);
  public productsDiscounted$ = this.productSvc.discounted(this.categoryId);
  public productsActive$ = this.productSvc.active(this.categoryId);

  constructor(private productSvc: ProductHandlerService) {}
}
