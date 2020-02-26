import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { Reservation } from 'src/app/models/reservation';

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.scss']
})
export class ReservationDetailComponent implements OnInit {


  reservation: Reservation;


  constructor(
    public reservationService: ReservationService
  ) {
    this.reservation = this.reservationService.getReservation();
    console.log(this.reservation);
  }

  ngOnInit() {
  }

}
