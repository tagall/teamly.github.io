import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Deal} from '../model/deal';

@Injectable({
  providedIn: 'root'
})
export class DealService {

  constructor(private http: HttpClient) { }

  getCode(deal: Deal) {
    return 'a87gsd2';
    // return this.http.get<Deal>(`/deal/code/{deal.id}`);
  }

  createDeal(deal: Deal) {

  }
}
