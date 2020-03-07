import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { Reservation } from 'src/app/models/reservation';
import { ToastrService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.scss']
})
export class ReservationDetailComponent implements OnInit {


  reservation: Reservation;


  constructor(
    public reservationService: ReservationService,
    private toast: ToastrService
  ) {
    this.reservation = this.reservationService.getReservation();
  }

  ngOnInit() {
  }

  start() {
    this.toast.modal('Comenzar', 'Confirmar comenzar a preparar', 'Comenzar', 'Cancelar').subscribe(res => {
      console.log(res);
    })
  }
  

}
