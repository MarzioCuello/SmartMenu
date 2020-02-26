import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../../services/toastr.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu: any;
  constructor(
    private toast: ToastrService,
    private orderService: OrderService
  ) {
    this.menu = JSON.parse('{"pages":[{"name":"Platos principales","categories":[{"name":"Platos raros","plates":[{"name":"Queso frio","price":"100","id":"102"},{"name":"Milanesa de rúcula","price":"150","id":"103"},{"name":"Brasero de lechuga","price":"80","id":"104"}]}]},{"name":"Platos secundarios","categories":[{"name":"Platos raros","plates":[{"name":"Queso frio","price":"100","id":"102"},{"name":"Milanesa de rucula","price":"130","id":"103"},{"name":"Brasero de lechuga","price":"110","id":"104"}]}]}]}');
  }

  ngOnInit() {
  }

  addPlate(p) {
    this.toast.modal('¿Agregar a tu pedido?', 'Agregando ' + p.name + ' a tu pedido por $' + p.price, 'Si', 'No').subscribe(res => {
      if (res) {
        this.orderService.addToOrder(p);
        this.toast.success('Correcto', 'Agregado a tu pedido');
      }
    });
  }

}
