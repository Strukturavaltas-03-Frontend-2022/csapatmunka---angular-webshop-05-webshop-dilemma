import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model/product';
import { ProductHandlerService } from './product-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'str-angular-project001';

  public products: Observable<Product[]> = this.productSvc.products;

  constructor(private productSvc: ProductHandlerService) {
    this.productSvc.getProducts();
  }
}
