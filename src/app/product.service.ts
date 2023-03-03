import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable()
export class ProductService {
  readonly API_LIST_MEAL = 'www.themealdb.com/api/json/v1/1/categories.php';

  constructor(private http: HttpClient) {}
  getAllMeal(): Observable<Product> {
    return this.http.get<Product>(this.API_LIST_MEAL);
  }
}
