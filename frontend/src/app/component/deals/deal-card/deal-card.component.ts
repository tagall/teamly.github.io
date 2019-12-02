import {Component, Input, OnInit} from '@angular/core';
import {Deal} from '../../../model/deal';
import {MatDialog} from '@angular/material/dialog';
import {DealDetailComponent} from '../deal-detail/deal-detail.component';

@Component({
  selector: 'app-deal-card',
  templateUrl: './deal-card.component.html'
})
export class DealCardComponent implements OnInit {

  @Input() public deal: Deal;
  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openOnClick($event: MouseEvent, deal: Deal) {
    const matDialogRef = this.dialog.open(DealDetailComponent);
    matDialogRef.componentInstance.deal = deal;

  }
}
