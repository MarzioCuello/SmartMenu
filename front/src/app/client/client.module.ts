import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { MenuComponent } from './menu/menu.component';
import { MyOrderComponent } from './my-order/my-order.component';


@NgModule({
  declarations: [ClientComponent, MenuComponent, MyOrderComponent],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
