import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CustomersRoutingModule } from '../shared/customer-routes';
import { CustomersComponent } from '../customers.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,    
    CustomersRoutingModule
  ],
  declarations: [CustomersComponent]
})
export class CustomersModule { }