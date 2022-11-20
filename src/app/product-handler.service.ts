import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Product } from './model/product';
import { ProductService } from './service/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductHandlerService {
  private _products = new BehaviorSubject<Product[]>([]);

  get products() {
    return this._products as Observable<Product[]>;
  }

  constructor(private productSvc: ProductService) {}

  getProducts() {
    this.productSvc.getAll()
      .pipe(
        tap((products: Product[]) => this._products.next(products))
      ).subscribe();
  };

  getProductById(productId: number) {
    return this.productSvc.getProduct(productId);
  };

  createProduct(product: Product) {
    this.productSvc.create(product).subscribe((product) => this.getProducts());
  };

  modifyProduct(product: Product) {
    this.productSvc.update(product).subscribe((product) => this.getProducts());
  };

  removeProduct(productId: number) {
    this.productSvc.remove(productId).subscribe((product) => this.getProducts());
  };

  featured(catId?: number) {
    return this._products.pipe(
      map((product) => product.filter((prod) => prod.featured && catId ? Number(prod.catId) === catId : prod.featured))
    ) as Observable<Product[]>;
  }

  discounted(catId?: number) {
    return this._products.pipe(
      map((product) => product.filter((prod) => prod.discounted && catId ? Number(prod.catId) === catId : prod.discounted))
    ) as Observable<Product[]>;
  }

  active(catId?: number) {
    return this._products.pipe(
      map((product) => product.filter((prod) => prod.active && catId ? Number(prod.catId) === catId : prod.active))
    ) as Observable<Product[]>;
  }
}
