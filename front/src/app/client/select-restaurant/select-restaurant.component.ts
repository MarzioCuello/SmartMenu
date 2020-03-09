import { Component, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { ToastrService } from '../../services/toastr.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { HttpService } from 'src/app/services/http.service';
import { CallBackService } from 'src/app/services/call-back.service';

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
    private router: Router,
    private loadRestaurant: CallBackService
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
    this.loadRestaurant.loadRestaurants().subscribe((res:any) => {
      for (let restaurant of res) {
        let coords = {lat: Number(restaurant.latitude), lng: Number(restaurant.longitude)};
        this.marker = new google.maps.Marker({position: coords, map: this.map});
        this.marker.setIcon('/assets/img/logo-s.png');
        let that = this;
        google.maps.event.addListener(this.marker, 'click', function() {
          that.toast.modal(restaurant.name,restaurant.latitude,"Seleccionar","Cancelar").subscribe(res => {
            if (res) {
              that.router.navigateByUrl("client/menu")
            }
          })
        })
      }
    })
    
    
    /*for (let restaurant of this.restaurants) {
      this.marker = new google.maps.Marker({position: restaurant.cords, map: this.map});
      this.marker.setIcon('/assets/img/logo-s.png');
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
    }*/
  }

}

