import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  mealList!: any;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    console.log('Product started');
    this.productService.getAllMeal().subscribe((resp) => {
      console.log(resp);
      this.mealList = [...resp.categories];
      console.log(this.mealList);
    });
  }
}
