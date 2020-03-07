import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { MenuComponent } from './menu/menu.component';
import { MyOrderComponent } from './my-order/my-order.component';

import { SelectRestaurantComponent } from './select-restaurant/select-restaurant.component';
import { FavoritesRestaurantsComponent } from './favorites-restaurants/favorites-restaurants.component';
import { ReservationComponent } from './reservation/reservation.component';


@NgModule({
  declarations: [ClientComponent, SelectRestaurantComponent, FavoritesRestaurantsComponent, MenuComponent, MyOrderComponent, ReservationComponent],
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  exports: [
    SelectRestaurantComponent
  ]
})
export class ClientModule { }
