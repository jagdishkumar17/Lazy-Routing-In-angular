import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {HomeComponent} from '../app/home/home.component';

const mainRoutes: Routes = [
  {
    path:'customers',
    loadChildren: '../app/customers/shared/customer-module#CustomersModule'
  },
  {
    path:'products',
    loadChildren: '../app/products/shared/product-module#ProductsModule'
  },
  {
    path:'',
    pathMatch:'full',
    component: HomeComponent    
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(mainRoutes)
  ],
  // exports: [RouterModule]
})
export class AppRoutingModule { }
