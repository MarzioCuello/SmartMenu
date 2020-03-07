import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../../services/toastr.service';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss']
})
export class MyOrderComponent implements OnInit {
  plates: any;
  constructor(
    private toast: ToastrService,
    private orderService: OrderService,
    private router:Router
  ) {
    this.plates = this.orderService.getOrder();
  }

  ngOnInit() {
  }

  removePlate(p) {
    this.toast.modal('¿Borrar de tu pedido?', 'Borrar ' + p.name + ' de tu pedido por $' + p.price, 'Borrar', 'Cancelar').subscribe(res => {
      if (res) {
        this.orderService.addToOrder(p);
        this.toast.success('Correcto', 'Eliminado de tu pedido');
      }
    });
  }

  pay() {
    this.toast.modal('Pago', 'El pago se ha realizado con éxito', 'Continar', false ).subscribe(res => {
      let that = this;
      if (res) {
        that.router.navigateByUrl("client/reserva")
      }
    })
  }

}
