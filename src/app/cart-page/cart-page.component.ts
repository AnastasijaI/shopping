import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/modeli/cart/Cart';
import { CartItem } from '../shared/modeli/cart/CartItem';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BagService } from '../services/bag/bag.service';
@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  cart!:Cart;
  constructor(private cartService: CartService){
    this.setCart()
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.bag.id);
    this.setCart();
  }
  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.bag.id, quantity);
    this.setCart();
  }
  setCart(){
    this.cart = this.cartService.getCart();
  }
  showAlert(): void {
    alert("Thanks for trusting us. Hope you'll like it");
  }
}
