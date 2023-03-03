import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  // constructor(private productService: ProductService) {}

  ngOnInit() {
    console.log('Product started');
    // this.productService.getAllMeal().subscribe((resp) => console.log(resp));
  }
}
