import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CustomerDetailComponent } from './customer-detail-index';

const routes: Routes = [
    {
      path: 'detail/:id', 
      component: CustomerDetailComponent
    }
  ]

  @NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ]
  })
  export class CustomersDetailRoutingModule { }