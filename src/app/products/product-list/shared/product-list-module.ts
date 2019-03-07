import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsListRoutingModule } from '../shared/product-list-route';
import { ProductListComponent } from './product-list-index';

@NgModule({
    imports: [
      CommonModule, 
      ProductsListRoutingModule
    ],
    declarations: [ProductListComponent]
  })

  export class ProductsListModule { }