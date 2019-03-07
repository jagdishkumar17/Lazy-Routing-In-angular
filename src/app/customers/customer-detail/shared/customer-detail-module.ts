import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersDetailRoutingModule } from '../shared/customer-detail-route';
import { CustomerDetailComponent } from './customer-detail-index';

@NgModule({
    imports: [
      CommonModule, 
      CustomersDetailRoutingModule
    ],
    declarations: [CustomerDetailComponent]
  })

  export class CustomersDetailModule { }