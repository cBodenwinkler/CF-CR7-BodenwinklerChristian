import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  items=[];
  //ADDON:
  sum= 0;

  constructor() { }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  //ADDON-Remove Bill Calculation:
  clearSum() {
    this.sum = 0;
    return this.sum;
  }
}
