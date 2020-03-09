import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CallBackService {
  url:any;

  constructor(
    private http:HttpClient,
    private apiService:ApiService
  ) {
    this.url = this.apiService.getUrl();
   }

  loadRestaurants() {
    return this.http.get(this.url + 'restaurant?format=json');
  }
}


//menu?format=json
//menu/1?format=json para seleccionar unmenu en particular
//plate?format=json
//plate/2?format=json para seleccionar un plato en particular