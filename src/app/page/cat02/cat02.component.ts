import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component {
  private categoryId = 2;
  private products$: Observable<Product[]> = this.productservice.getAll();

  public productsActive$ = this.products$.pipe(
    map((product)=>product.filter(product => Number(product.catId) === this.categoryId))
   )

  public productsFeatured$: Observable<Product[]> = this.productsActive$.pipe(
   map((product)=>product.filter((prod) => prod.featured)));

  public productsDiscounted$: Observable<Product[]> = this.productsActive$.pipe(
   map((product)=>product.filter((prod) => prod.discounted)));



  constructor(private productservice: ProductService) {}

/*   toSort(id:string):void{
    if(id === 'nameAZ' ){
      this.productservice.sortAZ(this.productsActive)
        this.productservice.productsChanged.subscribe(
        productList => this.productsActive = productList
    )}

    if(id === 'nameZA' ){
      this.productservice.sortZA(this.productsActive)
        this.productservice.productsChanged.subscribe(
        productList => this.productsActive = productList
    )}

    if(id === 'price19' ){
      this.productservice.sort19(this.productsActive)
        this.productservice.productsChanged.subscribe(
        productList => this.productsActive = productList
    )}

    if(id === 'price91' ){
      this.productservice.sort91(this.productsActive)
        this.productservice.productsChanged.subscribe(
        productList => this.productsActive = productList
    )}

    if(id === 'discount' ){
      this.productservice.getDiscounted(this.productsActive)
        this.productservice.productsChanged.subscribe(
        productList => this.productsActive = this.productsDiscounted
    )}

    if(id === 'featured' ){
      this.productservice.getFeatured(this.productsActive)
        this.productservice.productsChanged.subscribe(
        productList => this.productsActive = this.productsFeatured
    )}

  } */

  ngOnInit(){
   /*  this.productservice.productsChanged.subscribe(
      productList => this.productsActive = productList
    ) */
  }
}
