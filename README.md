# Lazy Loading in Angular

## What is Lazy loading?

Lazy loading is a technique in Angular that allows applications to load modules only when they are needed i.e.  when you first visit the route(s) corresponding to component(s) belonging to the lazy loaded module. It is a great strategy to reduce the time to interactive (TTI) of a single page application (SPA) and thereby provide a better user experience

## How to implement lazy loading?
Let's try to understand the concept with example: Say we have a SPA which have Customers, Products.
* For lazy Loading, keep all the customer related information in Customer module, similarly for the Products.
* Further Customers has two modules i.e. customer-list and customer-details. Similarly, Products has modules product-list and product-details.
* There are two buttons on the Home page which will route us to Customers and Products list page.
* There is a link on customer-list page which will route to our customer-detail page (for any random ID say 123). Similarly, for product-list page.
* There is a link on customer-detail page to navigate back to customer-list.

### Step 1:
![alt text](https://github.com/jagdishkumar17/Lazy-Routing-In-angular/blob/master/images/folder%20structure.PNG)

#### There are two modules, Customers and Products, which contains:
* Customer-detail module consists of,
  * customer-detail.component.html
  * customer-detail.component.ts
  * Shared folder has following files:
	* customer-detail-index.ts:   has all the export statements for the components that are to be used in this module.
	* customer-detail-routes.ts: Contains all the routes of this module.
	* customer-detail-module.ts: Configuration of the routes of that component.

Similarly, we will do for all the other modules.

### Step 2:
```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  template: '<router-outlet></router-outlet>',
})
export class CustomersComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}

```
we need <router-outlet> to render the child component in it.

### Step 3: Now we create routes for customer-details module. So, In the customer-detail-index.ts has export statements of all the components needed

```
export { CustomerDetailComponent } from '../customer-detail.component';
```

### Step 4: Create routes in customer-detail-route.ts:
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CustomerDetailComponent } from './customer-detail-index';

const routes: Routes = [
    {
      path: 'detail/:id', 
      component: CustomerDetailComponent
    }
  ]

  @NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ]
  })
  export class CustomersDetailRoutingModule { }

```

### Step 5: Configure the route in customer-detail-module.ts: 
```
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
```
### Step 6: In customer-route.ts register the customer routes like this:
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from '../shared/customer-index';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
    children: [ 
      {
        path: '',
        loadChildren: '../customer-list/shared/customer-list-module#CustomersListModule'
      },
      {
        path: '',
        loadChildren: '../customer-detail/shared/customer-detail-module#CustomersDetailModule'
      }
    ]
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
```
NOTE: Here need to export RouterModule to allow these routes to be used outside this module.


### Step 7: In customer-module.ts file, configure the customer-route.ts:
```
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

```
### Step 8: Register all the routes in app.route.ts:

```
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

```

* HOME component represents our home page.
* Path of the module file is followed by # with module class name
```
'../app/customers/shared/customer-module#CustomersModule'
```
* We will not import any lazy loading module here otherwise those modules would have been loaded at the time of application start.

### Step 9: We now need to register our app.route module into our app.module.ts file

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    
    AppComponent,
    HomeComponent   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

### Step 10: Add two buttons to app.component.html and route them to our modules:
```
<div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>

  <div class="container">
    <button routerLink="/customers">Customer</button>
    <button routerLink="/products">Products</button>
    <hr />
    <router-outlet></router-outlet>
  </div>
```

We will follow the same step for any other module that we use.
Let's run the application see everything is working, run the command `ng serve'

Output:

### Home Page:
![alt text](https://github.com/jagdishkumar17/Lazy-Routing-In-angular/blob/master/images/Output%201.PNG)

### Customer List Page:
![alt text](https://github.com/jagdishkumar17/Lazy-Routing-In-angular/blob/master/images/Output%202.PNG)

### Customer Details Page:
![alt text](https://github.com/jagdishkumar17/Lazy-Routing-In-angular/blob/master/images/Output%203.PNG)















