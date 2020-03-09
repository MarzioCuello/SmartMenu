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
  removeToOrder(plate){
    console.log(plate);
    this.order.splice(plate,1);
  }
  getOrder() {
    return this.order;
  }
}
