import {Component, Inject, Input, OnInit} from '@angular/core';
import {DealService} from '../../../service/deal.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Deal} from '../../../model/deal';

@Component({
  selector: 'app-deal-detail',
  templateUrl: './deal-detail.component.html',
  styleUrls: ['./deal-detail.component.css']
})
export class DealDetailComponent implements OnInit {
  @Input() deal: Deal;
  private dealPromocodeService: DealService;
  code: string;

  constructor(dealPromocodeService: DealService, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.dealPromocodeService = dealPromocodeService;
  }

  ngOnInit() {
  }

  getCode() {
    return this.code = this.dealPromocodeService.getCode(this.deal);
  }
}
