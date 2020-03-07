import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites-restaurants',
  templateUrl: './favorites-restaurants.component.html',
  styleUrls: ['./favorites-restaurants.component.scss']
})
export class FavoritesRestaurantsComponent implements OnInit {
  restaurants = [
    {
      name: "El Fogón",
      type: "Parrilla",
      address: "San José 1080",
      open: {
        days: "De lunes a domingos",
        hours: "De 10 a 24"
      },
      logo: "elfogon.png",
    },
    {
      name: "El Fogón",
      type: "Parrilla",
      address: "San José 1080",
      open: {
        days: "De lunes a domingos",
        hours: "De 10 a 24"
      },
      logo: "elfogon.png",
    },
    {
      name: "Santo Pecado",
      type: "Parrilla",
      address: "Bvr. Artigas 4304",
      open: {
        days: "De lunes a domingos",
        hours: "De 10 a 24"
      },
      logo: "santopecado.jpg",
    },
    {
      name: "Cilantro Restaurant",
      type: "Internacional",
      address: "Ramón Ortiz 2952",
      open: {
        days: "De lunes a domingos",
        hours: "De 10 a 24"
      },
      logo: "cilantro.png",
    }
  ]
  favorites: any;

  constructor() { 
    //this.favorites = JSON.parse('this.restaurants');
  }

  ngOnInit() {
  }

}
