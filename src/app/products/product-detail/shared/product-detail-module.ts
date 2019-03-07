import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsDetailRoutingModule } from '../shared/product-detail-route';
import { ProductDetailComponent } from './product-detail-index';

@NgModule({
    imports: [
      CommonModule, 
      ProductsDetailRoutingModule
    ],
    declarations: [ProductDetailComponent]
  })

  export class ProductsDetailModule { }