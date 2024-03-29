import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'd:/ecommerce-project/03-frontend/angular-ecommerce/src/app/common/product';
import { ProductService } from 'd:/ecommerce-project/03-frontend/angular-ecommerce/src/app/services/product.service';




@Component({
  selector: 'app-product-list',
  
  templateUrl: './product-list-grid.component.html',

  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  currentCategoryId: number = 1;

  constructor(private productService: ProductService,
                 private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
    this.listProducts();
  });
  }

  listProducts() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId){
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;

    }

    else {
      this.currentCategoryId = 1;
    }

    this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {
        this.products = data;
      }
    )
  }

}