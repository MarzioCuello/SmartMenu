import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { SelectRestaurantComponent } from './select-restaurant/select-restaurant.component';
import { FavoritesRestaurantsComponent } from './favorites-restaurants/favorites-restaurants.component';


@NgModule({
  declarations: [ClientComponent, SelectRestaurantComponent, FavoritesRestaurantsComponent],
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  exports: [
    SelectRestaurantComponent
  ]
})
export class ClientModule { }
