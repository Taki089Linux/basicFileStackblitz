import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getProductResponse, Product } from './product';

@Injectable()
export class ProductService {
  readonly API_LIST_MEAL =
    'https://www.themealdb.com/api/json/v1/1/categories.php';

  constructor(private http: HttpClient) {}
  getAllMeal(): Observable<any> {
    return this.http.get<any>(this.API_LIST_MEAL);
  }
}
