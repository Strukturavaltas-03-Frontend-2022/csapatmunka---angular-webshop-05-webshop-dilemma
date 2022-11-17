import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private products = this.productservice.getProducts();
  public productsFeatured = this.products.filter(product => product.featured);
  public productsDiscounted = this.products.filter(product => product.discounted);
  public productsActive = this.products.filter(product => product.active).sort(() => Math.random() - 0.5).slice(0,5);

  constructor(private productservice: ProductService) {}

  toSort(id:string):void{
    if(id === 'nameAZ' ){
      this.productservice.sortAZ(this.products)
        this.productservice.productsChanged.subscribe(
        productList => this.productsActive = productList
    )}

    if(id === 'nameZA' ){
      this.productservice.sortZA(this.products)
        this.productservice.productsChanged.subscribe(
        productList => this.productsActive = productList
    )}

    if(id === 'price19' ){
      this.productservice.sort19(this.products)
        this.productservice.productsChanged.subscribe(
        productList => this.productsActive = productList
    )}

    if(id === 'price91' ){
      this.productservice.sort91(this.products)
        this.productservice.productsChanged.subscribe(
        productList => this.productsActive = productList
    )}

    if(id === 'discount' ){
      this.productservice.getDiscounted(this.products)
        this.productservice.productsChanged.subscribe(
        productList => this.productsActive = this.productsDiscounted
    )}

    if(id === 'featured' ){
      this.productservice.getFeatured(this.products)
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
