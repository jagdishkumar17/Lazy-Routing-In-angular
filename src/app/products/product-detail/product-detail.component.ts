import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToProducts()
  {
    debugger;
    this.router.navigateByUrl('/customers');
  }


}
