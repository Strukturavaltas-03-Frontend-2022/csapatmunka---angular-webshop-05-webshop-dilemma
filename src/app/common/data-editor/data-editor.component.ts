import { Component } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { ProductHandlerService } from 'src/app/service/product-handler.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss'],
})
export class DataEditorComponent {
  products: Observable<Product[]>;
  columns: ITableColumn[] = this.config.dataTableColumns;
  editedId = -1;

  constructor(
    private productSvc: ProductHandlerService,
    private config: ConfigService
  ) {
    this.products = this.productSvc.products;
  }

  save(product: Product) {
    this.productSvc.modifyProduct(product);
    this.editedId = -1;
  }

  cancel() {
    this.editedId = -1;
 }

  edit(product: Product) {
    this.editedId = product.id || -1;
  }

  delete(productId: number): void{
    this.productSvc.removeProduct(productId);
  }
}


