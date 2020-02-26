import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  reservation: Reservation;
  constructor() { }


  setReservation(r) {
    this.reservation = r;
  }

  getReservation() {
    return this.reservation;
  }
}
