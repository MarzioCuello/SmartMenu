import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantComponent } from './restaurant.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'reserva', component: ReservationDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
