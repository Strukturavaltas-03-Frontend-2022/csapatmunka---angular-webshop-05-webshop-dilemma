import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  filterPhrase: string = '';

  @Input() products: Product[] | null = []
  @Output() sortClicked: EventEmitter<string> = new EventEmitter()

  ngOnInit(): void {
  }

  sortClick(sortMode:string):void {
    this.sortClicked.emit(sortMode)
  }

}
