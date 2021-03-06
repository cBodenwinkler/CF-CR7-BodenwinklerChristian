import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  travelItems = this.cartService.items;
  sum = 0;

  constructor(private cartService: CartServiceService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
 
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();

    for(let i = 0; i<this.travelItems.length;i++){
      this.sum += this.travelItems[i].price;
      // console.log(this.um);
    }
  }

  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
    console.table(customerData);
 
    this.items = this.cartService.clearCart();
    this.sum = this.cartService.clearSum();
    this.checkoutForm.reset();
  } 
}
