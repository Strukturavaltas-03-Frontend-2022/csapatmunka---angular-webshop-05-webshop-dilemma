import { Component } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
   private products$: Observable<Product[]> = this.productservice.getAll();

   public productsFeatured$: Observable<Product[]> = this.products$.pipe(
    map((product)=>product.filter((prod) => prod.featured)));

   public productsDiscounted$: Observable<Product[]> = this.products$.pipe(
    map((product)=>product.filter((prod) => prod.discounted)));

   public productsActive$: Observable<Product[]>  = this.products$.pipe(
    map((product)=>product.filter(product => product.active).sort(()=> Math.random()-0.5).slice(0,5))
   )

  constructor(private productservice: ProductService) {}

  toSort(id:string):void{
    if(id === 'nameAZ' ){
      this.productservice.sortAZ(this.products$)
      this.productservice.productsChanged.subscribe(
        productList => this.productsActive$ = productList
    )
  }

    if(id === 'nameZA' ){
      this.productservice.sortZA(this.products$)
      this.productservice.productsChanged.subscribe(
        productList => this.productsActive$ = productList
    )}

    if(id === 'price19' ){
      this.productservice.sort19(this.products$)
      this.productservice.productsChanged.subscribe(
        productList => this.productsActive$ = productList
    )}

    if(id === 'price91' ){
      this.productservice.sort91(this.products$)
      this.productservice.productsChanged.subscribe(
        productList => this.productsActive$ = productList
    )}

    if(id === 'discount' ){
      this.productservice.getDiscounted(this.products$)
        this.productservice.productsChanged.subscribe(
        productList => this.productsActive$ = this.productsDiscounted$
    )}

    if(id === 'featured' ){
      this.productservice.getFeatured(this.products$)
        this.productservice.productsChanged.subscribe(
        productList => this.productsActive$ = this.productsFeatured$
    )}

  }

  ngOnInit(){
    this.productservice.productsChanged.subscribe(
      productList => this.productsActive$ = productList
    )

  }

}
