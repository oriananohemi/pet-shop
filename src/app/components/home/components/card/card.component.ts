import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  cards = [
    {
      img: 'assets/images/banner5.jpeg',
      title: 'Juguetes'
    },
    {
      img: 'assets/images/banner.jpeg',
      title: 'Fiesta' 
    },
    {
      img: 'assets/images/banner3.jpeg',
      title: 'Detalles'
    }
  ]
}
