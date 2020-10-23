import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  items=[];
  //ADDON:
  travelSum= 0;

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

  //ADDON:
  clearSum() {
    this.travelSum = 0;
    return this.travelSum;
  }
}
