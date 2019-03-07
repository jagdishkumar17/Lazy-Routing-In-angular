import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent } from '../shared/customer-list-index';

const routes: Routes = [ 
  {
    path: '', component: CustomerListComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class CustomersListRoutingModule { }