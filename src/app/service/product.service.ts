import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  entityName: string = 'books'
  apiUrl: string = `${environment.apiUrl}${this.entityName}`

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProduct(id:number): Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  create(product:Product): Observable<Product[]>{
    return this.http.post<Product[]>(this.apiUrl, product);
  }

  update(product: Product): Observable<Product>{
    return this.http.put<Product>(`${this.apiUrl}/${product.id}`, product);
  }

  remove(id:number): Observable<Product>{
    return this.http.delete<Product>(`${this.apiUrl}/${id}`);
  }
}
