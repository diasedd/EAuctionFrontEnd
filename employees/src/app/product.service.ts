import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { Bid } from './products/bid';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl="http://localhost:8080/e-auction/api/v1/";

  constructor(private http:HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}`+"seller/fetch-products");
  }

  getProductById(id:number):Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}seller/fetch-product/+${id}`);
  }
  
  getBidsByProductId(id:number):Observable<Bid[]> {
    return this.http.get<Bid[]>(`${this.baseUrl}seller/show-bids/+${id}`);
  }

}
