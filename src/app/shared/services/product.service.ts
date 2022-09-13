import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get('http://localhost:3000/products');
  }
  getProduct(productId: number): Observable<any> {
    return this.http.get(`http://localhost:3000/products/${productId}`);
  }
  addProduct(product: any): Observable<any> {
    return this.http.post(
      `http://localhost:3000/products`,
      product
    );
  }
}
