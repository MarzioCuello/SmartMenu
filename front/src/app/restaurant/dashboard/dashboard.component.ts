import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../models/reservation';
import { ReservationService } from '../../services/reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  reservations: Reservation[];

  constructor(
    private reservationService: ReservationService,
    private router: Router
  ) {

    this.reservations = [
      new Reservation(JSON.parse('{"id":"1","time":"21:00","status":"pendiente","restaurant_id":"1","host":{"name":"Javiercin","last_name":"Young","email":"jav@mail.com","image":"https://ui-avatars.com/api/?name=j+y&background=E7AA00&color=fff&size=170"},"orders":[{"plates":[{"name":"Vaso de agua","id":"1"},{"name":"Cubo de hielo","id":"2"},{"name":"Un pote con granola","id":"3"},{"name":"Arroz con queso","id":"4","":{}}]},{"plates":[{"name":"Pepsi 500ml","id":"5"},{"name":"Churrasco de pollo","id":"6"},{"name":"Porcion de fritas","id":"7","":{}}]},{"plates":[{"name":"Corona 330ml","id":"8"},{"name":"Lasagna de llama","id":"9"},{"name":"Alfajor de pollo","id":"10"}]}]}')),
      new Reservation(JSON.parse('{"id":"1","time":"21:00","status":"pendiente","restaurant_id":"1","host":{"name":"Joe","last_name":"Strummer","email":"jav@mail.com","image":"https://ui-avatars.com/api/?name=j+s&background=fd397a&color=fff&size=170"},"orders":[{"plates":[{"name":"Vaso de agua","id":"1"},{"name":"Cubo de hielo","id":"2"},{"name":"Un pote con granola","id":"3"},{"name":"Arroz con queso","id":"4","":{}}]},{"plates":[{"name":"Pepsi 500ml","id":"5"},{"name":"Churrasco de pollo","id":"6"},{"name":"Porcion de fritas","id":"7","":{}}]},{"plates":[{"name":"Corona 330ml","id":"8"},{"name":"Lasagna de llama","id":"9"},{"name":"Alfajor de pollo","id":"10"}]}]}')),
      new Reservation(JSON.parse('{"id":"1","time":"21:00","status":"pendiente","restaurant_id":"1","host":{"name":"Javiercin","last_name":"Young","email":"jav@mail.com","image":"https://ui-avatars.com/api/?name=j+y&background=E7AA00&color=fff&size=170"},"orders":[{"plates":[{"name":"Vaso de agua","id":"1"},{"name":"Cubo de hielo","id":"2"},{"name":"Un pote con granola","id":"3"},{"name":"Arroz con queso","id":"4","":{}}]},{"plates":[{"name":"Pepsi 500ml","id":"5"},{"name":"Churrasco de pollo","id":"6"},{"name":"Porcion de fritas","id":"7","":{}}]},{"plates":[{"name":"Corona 330ml","id":"8"},{"name":"Lasagna de llama","id":"9"},{"name":"Alfajor de pollo","id":"10"}]}]}'))
    ];
    
  }

  ngOnInit() {
  }

  selectReservation(r) {
    this.reservationService.setReservation(r);
    this.router.navigateByUrl('/restaurant/reserva');
    
  }

}
