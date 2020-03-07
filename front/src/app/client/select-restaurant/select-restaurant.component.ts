import { Component, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { ToastrService } from '../../services/toastr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-restaurant',
  templateUrl: './select-restaurant.component.html',
  styleUrls: ['./select-restaurant.component.scss']
})
export class SelectRestaurantComponent implements OnInit {
  restaurants = [
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

  constructor(
    private toast: ToastrService,
    private router: Router
  ) { }

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
    for (let restaurant of this.restaurants) {
      this.marker = new google.maps.Marker({position: restaurant.cords, map: this.map});
      this.marker.setIcon('https://image.flaticon.com/icons/png/32/8/8753.png');
      let that = this;
      google.maps.event.addListener(this.marker, 'click', function() {
        that.toast.modal(
          restaurant.name,
          restaurant.times,
          "Seleccionar",
          "Cancelar"
        ).subscribe(res => {
          if (res) {
            that.router.navigateByUrl("client/menu")
          }
        })
      });
    }
  }

}

