import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersListRoutingModule } from '../shared/customer-list-route';
import { CustomerListComponent } from '../customer-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
      CommonModule, 
      CustomersListRoutingModule
    ],
    declarations: [CustomerListComponent]
  })

  export class CustomersListModule { }