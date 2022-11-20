import { Component } from '@angular/core';
import { ProductHandlerService } from 'src/app/service/product-handler.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss'],
})
export class Cat01Component {
  private categoryId = 1;

  public productsFeatured$ = this.productSvc.featured(this.categoryId);
  public productsDiscounted$ = this.productSvc.discounted(this.categoryId);
  public productsActive$ = this.productSvc.active(this.categoryId);

  constructor(private productSvc: ProductHandlerService) {}
}
