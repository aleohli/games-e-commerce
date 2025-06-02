import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'app/content/product-catalogue/models/product';
import { Banner } from 'app/shared/banner/models/banner';

@Injectable({
  providedIn: 'root'
})
export class ProductCatalogueService {
  private readonly productsUrl = 'api/products';
  private readonly bannerUrl = 'api/banner';
  private http = inject(HttpClient);

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  getBanner(): Observable<Banner> {
    return this.http.get<Banner>(this.bannerUrl);
  }
}
