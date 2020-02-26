import { Component, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-select-restaurant',
  templateUrl: './select-restaurant.component.html',
  styleUrls: ['./select-restaurant.component.scss']
})
export class SelectRestaurantComponent implements OnInit {
  data = [
    {
      name: "Fulano",
      cords: {
        lat: -34.908708,
        lng: -56.177784
      },
      times: "Lunes y miercoles",
    },
    {
      name: "Otro",
      cords: {
        lat: -34.908608,
        lng: -56.176884
      },
      times: "Martes y juves",
    },
    {
      name: "Raul",
      cords: {
        lat: -34.908508,
        lng: -56.178984
      },
      times: "Nunca",
    }
  ]
  map: any;
  IsWait: boolean = !this.map;
  uluru = {lat: -34.908608, lng: -56.177984};
  uluru2 = {lat: -34.908, lng: -56.17};
  marker:any;
  script:any;
  info: any = false;
  infowindow:any;

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;

  constructor() { }

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: this.uluru,
      zoom: 15,
      disableDefaultUI: true,
      mapTypeId: 'terrain'
    });
    for (let trainer of this.data) {
      this.marker = new google.maps.Marker({position: trainer.cords, map: this.map});
      this.marker.setIcon('https://image.flaticon.com/icons/png/32/8/8753.png');
      google.maps.event.addListener(this.marker, 'click', function() {
        this.infowindow = new google.maps.InfoWindow({
          content: "<strong>Información de un marker</strong>"
        });
        this.infowindow.open(this.map, this.marker);
      });
    }
  }

}

