import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list-index';

const routes: Routes = [ 
  {
    path: '', component: ProductListComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[ RouterModule ]
})

export class ProductsListRoutingModule { }