import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';

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
  ) {}

  ngOnInit(): void {}
}
