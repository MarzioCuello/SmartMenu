import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { IconComponent } from './icon/icon.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule } from '@angular/router';


import { HttpClientModule, HttpClient } from "@angular/common/http";
import { ErrorDisplayComponent } from './error-display/error-display.component';
import { LoadingDirective } from './loading.directive';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';

@NgModule({
  declarations: [NavbarComponent, IconComponent, MenuComponent, FooterComponent, ErrorDisplayComponent, LoadingDirective, ConfirmationModalComponent],
  imports: [
    CommonModule,
    InlineSVGModule.forRoot(),
    RouterModule,
    HttpClientModule
  ],
  exports: [
    NavbarComponent, IconComponent, MenuComponent, FooterComponent, ErrorDisplayComponent,LoadingDirective
  ],
  providers: [
  ],
  entryComponents: [ ConfirmationModalComponent]
})
export class SharedModule { }
