import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from '../cart-service.service';

import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(private route: ActivatedRoute, private cartService: CartServiceService) { }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }
 

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}
