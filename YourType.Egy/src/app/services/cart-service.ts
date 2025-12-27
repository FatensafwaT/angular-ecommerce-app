import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartKey = 'cart';
  private cartItems: any[] = [];
  
 
  cartCount = new BehaviorSubject<number>(0);

  constructor() {
    this.loadCart();
  }

  private loadCart() {
    this.cartItems = JSON.parse(localStorage.getItem(this.cartKey) || '[]');
    this.cartCount.next(this.cartItems.length);
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  addToCart(product: any) {
    const index = this.cartItems.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.cartItems[index].quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.updateStorage();
    alert("item added successfully")
  }

  removeFromCart(id: number) {
    const index = this.cartItems.findIndex(item => item.id === id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.updateStorage();
    }
  }

  incrementQuantity(id: number) {
    const index = this.cartItems.findIndex(item => item.id === id);
    if (index !== -1) {
      this.cartItems[index].quantity += 1;
      this.updateStorage();
    }
  }

  decrementQuantity(id: number) {
    const index = this.cartItems.findIndex(item => item.id === id);
    if (index !== -1) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity -= 1;
      } else {
        this.cartItems.splice(index, 1);
      }
      this.updateStorage();
    }
  }

  clearCart() {
    this.cartItems = [];
    this.updateStorage();
  }

  private updateStorage() {
    localStorage.setItem(this.cartKey, JSON.stringify(this.cartItems));
    this.cartCount.next(this.cartItems.length);
  }
  getTotalPrice() {
    const cart = this.getCartItems();
    return cart.reduce(
      (total: number, item: any) => total + item.price * item.quantity,
      0
    );
  }
}
