import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';
import { FavoritesRestaurantsComponent } from './favorites-restaurants/favorites-restaurants.component';

const routes: Routes = [
  { 
    path: '', component: ClientComponent 
  },
  {
    path: 'favorites', component: FavoritesRestaurantsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
