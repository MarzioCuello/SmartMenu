import { Component, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BsLocaleService } from 'ngx-bootstrap';


import { defineLocale } from 'ngx-bootstrap/chronos';

import { esLocale } from 'ngx-bootstrap/locale';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Noodle';
  @ViewChild("menu", {static: false}) menu: any;

  constructor(
    private router: Router,
    public localeService: BsLocaleService) 
  {
    
    defineLocale('es', esLocale);
    this.localeService.use('es');


    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        window.scrollTo(0,0);
      }
    });
  }

  toggleMenu() {
    this.menu.toggle();
  }
}
