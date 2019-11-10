import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html'
})
export class DealListComponent implements OnInit {

  constructor() { }
  nbDeals = 3;

  deals = [
    {
      title: 'Alex fitness',
      discount: '100%'
    },
    {
      title: 'Omega fitness',
      discount: '100%'
    },
    {
      title: 'Alfa fitness',
      discount: '100%'
    }
  ];

  ngOnInit() {
  }

}
