import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = ["./assets/tienda-online.svg", "1011", "984"];

  constructor() { }

  ngOnInit() {
  }

}

