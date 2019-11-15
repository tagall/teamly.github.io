import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../service/authentication.service';

@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html'
})
export class DealListComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
  }

  nbDeals = 3;

  deals = [
    {
      id: '1',
      name: 'Скидка в Алекс фитнес',
      description: 'Используйте промокод для получения скидки в сеть фитнесс клубов Алекс фитнесс',
      company: 'Alex Fitness',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '50',
    },
    {
      id: '2',
      name: 'Скидка в Скуратов кофе',
      description: 'Используйте промокод для получения скидки в кофейню Скуратов Кофе',
      company: 'Скуратов кофе',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '15',
    },
    {
      id: '3',
      name: 'Скидка в Аэрофлот',
      description: 'Используйте промокод для получения скидки при покупке билетов на сайте компании аэрофлот',
      company: 'Аэрофлот',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '10',
    },
    {
      id: '1',
      name: 'Скидка в Алекс фитнес',
      description: 'Используйте промокод для получения скидки в сеть фитнесс клубов Алекс фитнесс',
      company: 'Alex Fitness',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '50',
    },
    {
      id: '2',
      name: 'Скидка в Скуратов кофе',
      description: 'Используйте промокод для получения скидки в кофейню Скуратов Кофе',
      company: 'Скуратов кофе',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '15',
    },
    {
      id: '3',
      name: 'Скидка в Аэрофлот',
      description: 'Используйте промокод для получения скидки при покупке билетов на сайте компании аэрофлот',
      company: 'Аэрофлот',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '10',
    },
    {
      id: '1',
      name: 'Скидка в Алекс фитнес',
      description: 'Используйте промокод для получения скидки в сеть фитнесс клубов Алекс фитнесс',
      company: 'Alex Fitness',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '50',
    },
    {
      id: '2',
      name: 'Скидка в Скуратов кофе',
      description: 'Используйте промокод для получения скидки в кофейню Скуратов Кофе',
      company: 'Скуратов кофе',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '15',
    },
    {
      id: '3',
      name: 'Скидка в Аэрофлот',
      description: 'Используйте промокод для получения скидки при покупке билетов на сайте компании аэрофлот',
      company: 'Аэрофлот',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '10',
    },
    {
      id: '1',
      name: 'Скидка в Алекс фитнес',
      description: 'Используйте промокод для получения скидки в сеть фитнесс клубов Алекс фитнесс',
      company: 'Alex Fitness',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '50',
    },
    {
      id: '2',
      name: 'Скидка в Скуратов кофе',
      description: 'Используйте промокод для получения скидки в кофейню Скуратов Кофе',
      company: 'Скуратов кофе',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '15',
    },
    {
      id: '3',
      name: 'Скидка в Аэрофлот',
      description: 'Используйте промокод для получения скидки при покупке билетов на сайте компании аэрофлот',
      company: 'Аэрофлот',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '10',
    },
    {
      id: '1',
      name: 'Скидка в Алекс фитнес',
      description: 'Используйте промокод для получения скидки в сеть фитнесс клубов Алекс фитнесс',
      company: 'Alex Fitness',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '50',
    },
    {
      id: '2',
      name: 'Скидка в Скуратов кофе',
      description: 'Используйте промокод для получения скидки в кофейню Скуратов Кофе',
      company: 'Скуратов кофе',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '15',
    },
    {
      id: '3',
      name: 'Скидка в Аэрофлот',
      description: 'Используйте промокод для получения скидки при покупке билетов на сайте компании аэрофлот',
      company: 'Аэрофлот',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      discount: '10',
    }
  ];

  ngOnInit() {
  }

  OnMatCardClickEvent(deal: any) {

  }

  newDeal() {

  }
}
