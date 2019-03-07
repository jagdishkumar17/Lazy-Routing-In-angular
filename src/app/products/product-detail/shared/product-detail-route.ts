import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailComponent } from './product-detail-index';

const routes: Routes = [
    {
        path: 'detail/:id',
        component: ProductDetailComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ProductsDetailRoutingModule { }