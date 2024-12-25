import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];

  addToCart(item: any) {
    const existingItem = this.cart.find((cartItem) => cartItem.name === item.name);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cart.push({ ...item });
    }
  }

  removeFromCart(item: any) {
    this.cart = this.cart.filter((cartItem) => cartItem.name !== item.name);
  }

  getCartItems() {
    return this.cart;
  }

  getCartTotal() {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
