import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from '../shared/customer-index';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
    children: [
      {
        path: '',
        loadChildren: '../customer-list/shared/customer-list-module#CustomersListModule'
      },
      {
        path: '',
        loadChildren: '../customer-detail/shared/customer-detail-module#CustomersDetailModule'
      }
    ]
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }