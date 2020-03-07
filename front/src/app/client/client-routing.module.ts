import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';
import { MenuComponent } from './menu/menu.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { FavoritesRestaurantsComponent } from './favorites-restaurants/favorites-restaurants.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  { path: '', component: ClientComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'mi-pedido', component: MyOrderComponent },
  { path: 'favorites', component: FavoritesRestaurantsComponent },
  { path: 'reserva', component: ReservationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
