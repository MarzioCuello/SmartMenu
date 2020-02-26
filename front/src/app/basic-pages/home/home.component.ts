import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = ["./assets/img/tienda-online.svg","./assets/img/calendario.svg","./assets/img/red.svg","./assets/img/menu.svg", "./assets/img/reloj-de-arena.svg"];

  constructor() { }

  ngOnInit() {
  }

}

