import { Component, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { EventEmitter } from 'stream';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss'],
})
export class DataEditorComponent implements OnInit {
  productList: Product[] = [];

  columns: ITableColumn[] = this.config.dataTableColumns;



  constructor(
    private productService: ProductService,
    private config: ConfigService
  ) {
    this.productList = this.productService.getProducts();
  }

  ngOnInit(): void {}

  onEdit(item: any) {
    this.productList.forEach((element) => {
      element.isEditing = false;
    });
    item.isEditing = true;
  }

  onDelete(product: Product): void{
    this.productList.splice(product,1);
  }
}


