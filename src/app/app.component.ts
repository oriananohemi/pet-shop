import { Component } from '@angular/core';

import { Product } from './definitions/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items = ['nicolas', 'julian', 'perez'];

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

  addItem() {
    this.items.push('nuevo item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }
}
