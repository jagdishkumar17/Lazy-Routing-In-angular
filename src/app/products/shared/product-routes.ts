import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './product-index';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: '',
        loadChildren: '../product-list/shared/product-list-module#ProductsListModule'
      },
      {
        path: '',
        loadChildren: '../product-detail/shared/product-detail-module#ProductsDetailModule'
      }      
    ]
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ProductsRoutingModule { }