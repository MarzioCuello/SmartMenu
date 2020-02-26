import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicPagesRoutingModule } from './basic-pages-routing.module';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { SharedModule } from '../shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [HomeComponent, FaqComponent],
  imports: [
    CommonModule,
    SharedModule,
    BasicPagesRoutingModule,
    NgbModule
  ]
})
export class BasicPagesModule { }
