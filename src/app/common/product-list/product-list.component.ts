import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { SortType } from 'src/app/model/sortType';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  public filterPhrase: string = '';
  public sortType: SortType = 'NameAZ';

  constructor() {}

  sort(sortType: SortType) {
    this.sortType = sortType;
  }
}
