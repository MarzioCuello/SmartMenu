import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'faq', component: FaqComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicPagesRoutingModule { }
