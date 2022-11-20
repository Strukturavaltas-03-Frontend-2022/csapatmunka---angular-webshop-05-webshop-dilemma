import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductHandlerService } from 'src/app/product-handler.service';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-cat03',
  templateUrl: './cat03.component.html',
  styleUrls: ['./cat03.component.scss']
})
export class Cat03Component {
  private categoryId = 3;

  public productsFeatured$ = this.productSvc.featured(this.categoryId);
  public productsDiscounted$ = this.productSvc.discounted(this.categoryId);
  public productsActive$ = this.productSvc.active(this.categoryId);

  constructor(private productSvc: ProductHandlerService) {}
}
