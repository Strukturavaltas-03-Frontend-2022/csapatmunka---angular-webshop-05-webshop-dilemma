import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  actualProduct = this.productService.
  getProducts().
  find(product=> product.id === Number(this.actR.snapshot.params['id'])) || new Product()

  actualCategory: Category = this.categoryService.getAll().find(item=> item.id ===  this.actualProduct.catId) || new Category()


  constructor(
    private productService: ProductService,
    private actR: ActivatedRoute,
    private location: Location,
    private categoryService: CategoryService
  ) { }

  backTo():void{
    this.location.back()
  }

  ngOnInit(): void {
  }


}
