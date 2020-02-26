import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [RestaurantComponent, DashboardComponent, ReservationDetailComponent],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    SharedModule
  ]
})
export class RestaurantModule { }
