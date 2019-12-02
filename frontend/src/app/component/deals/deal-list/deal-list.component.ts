import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../service/authentication.service';
import {Deal} from '../../../model/deal';
import {DealDetailComponent} from '../deal-detail/deal-detail.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['deal-list.component.css']
})
export class DealListComponent implements OnInit {
  @Input() public deal: Deal;

  constructor(private authenticationService: AuthenticationService, private dialog: MatDialog) {
  }

  openOnClick($event: MouseEvent, deal: Deal) {
    const matDialogRef = this.dialog.open(DealDetailComponent);
    matDialogRef.componentInstance.deal = deal;
  }

  nbDeals = 3;

  deals = [
    {
      id: '1',
      name: 'Алекс фитнес',
      description: 'Используйте промокод для получения скидки в сеть фитнесс клубов Алекс фитнесс',
      company: 'Alex Fitness',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '50',
    },
    {
      id: '2',
      name: 'Скуратов кофе',
      description: 'Используйте промокод для получения скидки в кофейню Скуратов Кофе',
      company: 'Скуратов кофе',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '15',
    },
    {
      id: '3',
      name: 'Аэрофлот',
      description: 'Используйте промокод для получения скидки при покупке билетов на сайте компании аэрофлот',
      company: 'Аэрофлот',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '10',
    },
    {
      id: '1',
      name: 'Алекс фитнес',
      description: 'Используйте промокод для получения скидки в сеть фитнесс клубов Алекс фитнесс',
      company: 'Alex Fitness',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '50',
    },
    {
      id: '2',
      name: 'Скуратов кофе',
      description: 'Используйте промокод для получения скидки в кофейню Скуратов Кофе',
      company: 'Скуратов кофе',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '15',
    },
    {
      id: '3',
      name: 'Аэрофлот',
      description: 'Используйте промокод для получения скидки при покупке билетов на сайте компании аэрофлот',
      company: 'Аэрофлот',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '10',
    },
    {
      id: '1',
      name: 'Алекс фитнес',
      description: 'Используйте промокод для получения скидки в сеть фитнесс клубов Алекс фитнесс',
      company: 'Alex Fitness',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '50',
    },
    {
      id: '2',
      name: 'Скуратов кофе',
      description: 'Используйте промокод для получения скидки в кофейню Скуратов Кофе',
      company: 'Скуратов кофе',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '15',
    },
    {
      id: '3',
      name: 'Аэрофлот',
      description: 'Используйте промокод для получения скидки при покупке билетов на сайте компании аэрофлот',
      company: 'Аэрофлот',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '10',
    },
    {
      id: '1',
      name: 'Алекс фитнес',
      description: 'Используйте промокод для получения скидки в сеть фитнесс клубов Алекс фитнесс',
      company: 'Alex Fitness',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '50',
    },
    {
      id: '2',
      name: 'Скуратов кофе',
      description: 'Используйте промокод для получения скидки в кофейню Скуратов Кофе',
      company: 'Скуратов кофе',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '15',
    },
    {
      id: '3',
      name: 'Аэрофлот',
      description: 'Используйте промокод для получения скидки при покупке билетов на сайте компании аэрофлот',
      company: 'Аэрофлот',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '10',
    },
    {
      id: '1',
      name: 'Алекс фитнес',
      description: 'Используйте промокод для получения скидки в сеть фитнесс клубов Алекс фитнесс',
      company: 'Alex Fitness',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '50',
    },
    {
      id: '2',
      name: 'Скуратов кофе',
      description: 'Используйте промокод для получения скидки в кофейню Скуратов Кофе',
      company: 'Скуратов кофе',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '15',
    },
    {
      id: '3',
      name: 'Аэрофлот',
      description: 'Используйте промокод для получения скидки при покупке билетов на сайте компании аэрофлот',
      company: 'Аэрофлот',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '10',
    }
  ];

  ngOnInit() {
  }

  newDeal() {

  }
}
