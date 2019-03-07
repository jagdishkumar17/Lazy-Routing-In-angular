import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html'
})
export class CustomerDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToCustomers()
  {
    debugger;
    this.router.navigateByUrl('/customers');
  }
}
