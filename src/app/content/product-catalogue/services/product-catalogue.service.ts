import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { Product } from 'app/content/product-catalogue/models/product';
import { Banner } from 'app/content/product-catalogue/models/banner';

@Injectable({
  providedIn: 'root'
})
export class ProductCatalogueService {
  private readonly productsUrl = 'http://localhost:3000/products';
  private readonly bannerUrl = 'http://localhost:3000/banner';
  private http = inject(HttpClient);

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(delay(2000));
  }

  getBanner(): Observable<Banner> {
    return this.http.get<Banner>(this.bannerUrl).pipe(delay(1200));
  }
}
