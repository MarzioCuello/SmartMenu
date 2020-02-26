import { Injectable } from '@angular/core';
import { Plate } from '../models/plate';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  order: Plate[] = [];
  constructor() { }

  addToOrder(plate) {
    this.order.push(plate);
  }
  getOrder() {
    return this.order;
  }
}
