import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductsListModule } from '../product-list/shared/product-list-module';
import { ProductsDetailModule } from '../product-detail/shared/product-detail-module';
import { ProductsRoutingModule } from '../shared/product-routes';

import { ProductsComponent } from './product-index';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,    
    ProductsRoutingModule  
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }