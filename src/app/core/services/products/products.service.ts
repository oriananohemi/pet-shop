import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { Product } from '../../definitions/product.model';

// import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/1.jpg',
      title: 'Collar',
      price: 10,
      description: 'bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/2.jpg',
      title: 'Juguete',
      price: 5,
      description: 'bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/3.jpg',
      title: 'Juguete',
      price: 15,
      description: 'bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/4.jpg',
      title: 'Juguete',
      price: 15,
      description: 'bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/5.jpg',
      title: 'Juguete',
      price: 10,
      description: 'bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/6.jpg',
      title: 'Juguete',
      price: 15,
      description: 'bla bla bla'
    },
    {
      id: '7',
      image: 'assets/images/7.jpg',
      title: 'Juguete',
      price: 10,
      description: 'bla bla bla'
    },
    {
      id: '8',
      image: 'assets/images/8.jpg',
      title: 'Juguete',
      price: 10,
      description: 'bla bla bla'
    },
    {
      id: '9',
      image: 'assets/images/9.jpg',
      title: 'Juguete',
      price: 5,
      description: 'bla bla bla'
    },
    {
      id: '10',
      image: 'assets/images/10.jpg',
      title: 'Juguete',
      price: 15,
      description: 'bla bla bla'
    },
  ];

  // constructor(
  //   private http: HttpClient
  // ) { }

  // getAllProducts() {
  //   return this.http.get<Product[]>(`environment.url_api/products`);
  // }

  getAllProducts() {
    return this.products;
  }

  // getProduct(id: string) {
  //   return this.http.get(`$environment.url_api/products/${id}`);
  // }

  // getProduct(id: string) {
  //   return this.http.get<Product>(item => id === item.id);
  // }

  getProduct(id: string) {
    return this.products.find(item => id === item.id);
  }

  // createProduct(product: Product) {
  //   return this.http.post(`${environment.url.api}/products, product)
  // }
}
