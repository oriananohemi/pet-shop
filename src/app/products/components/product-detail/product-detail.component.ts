import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../core/definitions/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.product = this.productsService.getProduct(id);
      // this.fetchProduct(id)
    });
  }

  // fetchProduct(id: string) {
      // this.productsService.getProduct(id)
      // .subscribe(product => {
      //  this.product = product
      // })
  // }

  // createProduct() {
  //   const newProduct: Product = {
  //     id: '333',
  //     title: 'nuevo',
  //     image: 'assets/images/1.jpg',
  //     price: 3000,
  //     description: 'nuevo producto'
  //   }
  //   this.productsService.createProduct(id)
  //   .subscribe(product => {
  //     console.log(product);
  //   })
  // }
}
