import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component {
  private categoryId = 1;
  private products = this.productservice.getProducts()
  public productsActive = this.products.filter(product => product.catId === this.categoryId);
  public productsDiscounted = this.productsActive.filter(product =>  product.discounted);
  public productsFeatured = this.productsActive.filter(product=> product.featured);


  constructor(private productservice: ProductService) {}

  toSort(id:string):void{
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

  }

  ngOnInit(){
    this.productservice.productsChanged.subscribe(
      productList => this.productsActive = productList
    )
  }
}
