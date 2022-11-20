import { Component } from '@angular/core';
import { ProductHandlerService } from 'src/app/service/product-handler.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public productsFeatured$ = this.productSvc.featured();
  public productsDiscounted$ = this.productSvc.discounted();
  public productsActive$ = this.productSvc.active();

  constructor(private productSvc: ProductHandlerService) {}
}
